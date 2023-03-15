import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import auth from "../../fierbaseConfig";
import UseSingOut from "../../Hooks/UseSignOut";
export const FirebaseAuth = createContext();

const FirebaseAuthProvider = ({ children }) => {
  //create account data post database
  const createNewAccountDataPostDatabase = async (data) => {
    await axios({
      url: `${process.env.REACT_APP_SERVER_URL}user/create`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: data,
    })
      .then((res) => {
        const { email } = res.data.result;
        localStorage.setItem("login_user", email);
        toast.success("Create account Successfully");
      })
      .catch((err) => toast.error("Create account field"));
  };

  // check valid username and create new account
  const checkValidUsernameAndCreateAccount = (data, userUid = null) => {
    // get all username
    axios(`${process.env.REACT_APP_SERVER_URL}user/all/username`)
      .then(async (res) => {
        // check username valid or not
        const validUserName = res.data.result.includes(data.username);

        if (!validUserName) {
          // post new user data in database
          createNewAccountDataPostDatabase(data);
        } else {
          // getAuth().deleteUser(userUid)
          toast.error("username already exist");
        }
      })
      .catch((err) => {
        toast.error("Create account field");
      });
  };

  // create account function handle firebase
  const CreateAccountEmailAndPass = (email, pass, postData) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const userUid = userCredential.user.uid;
        // saved account information database
        checkValidUsernameAndCreateAccount(postData, userUid);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  // saved login information database
  const loginAccountDataSaveDatabase = (data) => {
    // login data save
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: data,
    };
    axios(`${process.env.REACT_APP_SERVER_URL}user/login`, options)
      .then((response) => {
        response && localStorage.setItem("login_user", data.email);
        response && toast.success("Login successfully");
      })
      .catch((err) => {
        // getAuth().deleteUser(userUid)
        UseSingOut();
        err && toast.error("Login field");
      });
  };

  // login account function handle firebase
  const LoginWithGmailAndPass = (email, password) => {
    // login firebase email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          //Save login data in database
          loginAccountDataSaveDatabase({
            email: user.email,
            provider: "email",
          });
        }
      })
      .catch((error) => {
        //Signed id error
        const errorMessage = error.message;
        toast.error(errorMessage.slice(22, -2));
      });
  };

  //check user exit or not function
  const checkUserExitOrNot = async (findUser) => {
    let exitOrNot;
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}user`)
      .then((res) => {
        const users = res.data.result;
        if (users.length > 0) {
          const exitUser = users.find((user) => user.email === findUser);
          exitOrNot = exitUser;
        } else {
          exitOrNot = false;
        }
      })
      .catch((err) => {});
    return exitOrNot;
  };

  //make random user name
  const makeRandomUsername = async (username) => {
    let finalUsername;
    //removed username all space
    username = username.replace(/\s/g, "");

    const randomUsername = `${username}${Math.floor(Math.random() * 1000)}`;

    // check valid username
    await axios(`${process.env.REACT_APP_SERVER_URL}user/all/username`).then(
      (res) => {
        if (res.data.result.length > 0) {
          const validUserName = res.data.result.includes(randomUsername);
          if (!validUserName) {
            //username is valid
            finalUsername = randomUsername;
          } else {
            makeRandomUsername(username);
          }
        } else {
          finalUsername = randomUsername;
        }
      }
    );

    return finalUsername;
  };

  //login and signIn with google handle function
  const LoginAndSignInWithGoogle = () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(async (result) => {
          const { email, displayName } = result.user;
          if (email) {
            //check user exit ot not
            const existUser = await checkUserExitOrNot(email);
            if (existUser) {
              // update user by email
              loginAccountDataSaveDatabase({ email, provider: "google" });
            } else {
              // make random user name
              const username = await makeRandomUsername(displayName);
              //new user data send database
              const postData = {
                name: displayName,
                email,
                username: username.toLowerCase(),
                loginRecords: [{ provider: "google" }],
              };
              await createNewAccountDataPostDatabase(postData);
            }
          }
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage.split(21, -2));
        });
    } catch {
      UseSingOut();
      toast.error("singIn field");
    }
  };

  //find user by email
  const FindUserByEmail = async (email) => {
    let result = false;
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}user/${email}`)
      .then(({ data }) => {
        //user find success
        result = data;
      })
      .catch((err) => {
        //user find err
      });
    return result;
  };

  // current login user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //get all users
  const [allUsers, setAllUsers] = useState(Array);
  const [allUsersLoading, setAllUsersLoading] = useState(false);
  const [allUsersError, setAllUsersError] = useState(Object);
  const GetAllUsers = async () => {
    setAllUsersLoading(true);
    await axios(`${process.env.REACT_APP_SERVER_URL}user`, {
      method: "GET",
    })
      .then((data) => {
        setAllUsers(data.data);
        setAllUsersLoading(false);
      })
      .catch((err) => {
        setAllUsersError(err);
        setAllUsersLoading(false);
      });
  };
  const getAllUsers = [allUsers, allUsersLoading, allUsersError, GetAllUsers];
  useEffect(() => {
    GetAllUsers();
  }, []);

  //check login user admin status
  const CheckAdmin = () => {
    const loginUser = allUsers.result.find(
      (databaseUser) => databaseUser.email === user.email
    );
    if (loginUser) {
      return loginUser.admin;
    }
  };

  //make admin function start
  const [makeAdminResult, setMakeAdminResult] = useState(Object);
  const [makeAdminLoading, setMakeAdminLoading] = useState(false);
  const [makeAdminError, setMakeAdminError] = useState(Object);
  const MakeAdmin = async (id, currentStatus) => {
    setMakeAdminLoading(true);
    await axios
      .put(`${process.env.REACT_APP_SERVER_URL}user/make-admin/${id}`, {
        admin: currentStatus,
      })
      .then(({ data }) => {
        if (!data?.result) {
          setMakeAdminError({ error: data.message });
          setMakeAdminLoading(false);
          toast.error(data.message);
        } else if (data?.error) {
          setMakeAdminError({ error: data?.error });
          setMakeAdminLoading(false);
          toast.error("Make Admin field");
        } else {
          setMakeAdminResult(data.result);
          const removedChange = allUsers.result.filter(
            (user) => user._id !== id
          );
          setAllUsers({
            ...allUsers,
            result: [...removedChange, data.result],
          });
          setMakeAdminLoading(false);
          toast.success(
            `${
              currentStatus
                ? "Removed admin successfully"
                : "Add admin successfully"
            }`
          );
        }
      });
  };
  const makeAdmin = [
    makeAdminResult,
    makeAdminLoading,
    makeAdminError,
    MakeAdmin,
  ];

  // All data store hear
  const firebaseStore = {
    CreateAccountEmailAndPass,
    LoginWithGmailAndPass,
    LoginAndSignInWithGoogle,
    currentUser: [user, loading],
    getAllUsers,
    CheckAdmin,
    FindUserByEmail,
    makeAdmin,
  };

  return (
    <FirebaseAuth.Provider value={firebaseStore}>
      {children}
    </FirebaseAuth.Provider>
  );
};

export default FirebaseAuthProvider;
