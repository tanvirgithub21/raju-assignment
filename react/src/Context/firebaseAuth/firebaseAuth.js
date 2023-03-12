import { async } from "@firebase/util";
import axios from "axios";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../../fierbaseConfig";
import UseSingOut from "../../Hooks/UseSignOut";



const Auth = () => {

    const firebaseAuth = {}

    //create account data post database 
    const createNewAccountDataPostDatabase = async (data) => {
        console.log("createNewAccountDataPostDatabase");
        await axios({
            url: `${process.env.REACT_APP_SERVER_URL}user/create`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: data
        })
            .then(res => {
                console.log("create account res", res);
                const { email } = res.data.result;
                localStorage.setItem('login_user', email)
                toast.success("Create account Successfully")
            })
            .catch(err => toast.error("Create account field"))
    }

    // saved create new account information database
    const createAccountDataSaveDatabase = (data, userUid = null) => {
        // get all username 
        axios(`${process.env.REACT_APP_SERVER_URL}user/all/username`)
            .then(async res => {
                console.log("inner server post", res.data.result);

                // check username valid or not 
                const validUserName = res.data.result.includes(data.username)
                console.log(validUserName);

                if (!validUserName) {
                    // post new user data in database
                    createNewAccountDataPostDatabase(data)
                } else {
                    // getAuth().deleteUser(userUid)
                    toast.error("username already exist")
                }
            }).catch(err => {
                toast.error("Create account field")
                console.log("inner server post");

            })

    };

    // create account function handle firebase
    firebaseAuth.CreateAccountEmailAndPass = (email, pass, postData) => {
        console.log(postData);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const userUid = userCredential.user.uid;
                // saved account information database
                createAccountDataSaveDatabase(postData, userUid);
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)

            });
    }

    // saved login information database
    const loginAccountDataSaveDatabase = (data) => {

        // login data save
        const options = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: data
        };
        axios(`${process.env.REACT_APP_SERVER_URL}user/login`, options)
            .then(response => {
                response && toast.success("Login successfully")
            })
            .catch(err => {
                // getAuth().deleteUser(userUid)
                console.log(err);
                UseSingOut()
                err && toast.error("Login field")
            })
    };

    // login account function handle firebase
    firebaseAuth.LoginWithGmailAndPass = (email, password) => {

        // login firebase email and password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user) {
                    console.log("enter save data", user, user.email);
                    //Save login data in database
                    loginAccountDataSaveDatabase({ email: user.email, provider: "email" })
                }
            })
            .catch((error) => {
                //Signed id error
                const errorMessage = error.message;
                toast.error(errorMessage.slice(22, -2))
            });
    };

    //check user exit or not function
    const checkUserExitOrNot = async (findUser) => {
        let exitOrNot;
        await axios.get(`${process.env.REACT_APP_SERVER_URL}user`)
            .then((res) => {
                const users = res.data.result
                console.log("res", users);
                if (!users.length === 0) {
                    const exitUser = users.find(user => user.email === findUser)
                    exitOrNot = exitUser
                } else {
                    console.log("enter else");
                    exitOrNot = false
                }
            }).catch(err => {
                console.log("find user field", err);
            })
        return exitOrNot
    }

    //make random user name 
    const makeRandomUsername = async (username) => {

        let finalUsername;
        console.log("makeRandomUsername");
        console.log(username);
        //removed username all space
        username = username.replace(/\s/g, "");
        console.log(username);

        const randomUsername = `${username}${Math.floor(Math.random() * 1000)}`
        console.log(randomUsername);

        // check valid username 
        await axios(`${process.env.REACT_APP_SERVER_URL}user/all/username`)
            .then(res => {
                if (!res.data.result.length === 0) {

                    const validUserName = res.data.result.includes(randomUsername)
                    if (!validUserName) {
                        //username is valid
                        finalUsername = randomUsername
                    } else {
                        makeRandomUsername(username)
                    }
                } else {
                    finalUsername = randomUsername
                }
            })

        return finalUsername

    }


    firebaseAuth.LoginAndSignInWithGoogle = () => {
        try {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then(async (result) => {
                    const { email, displayName } = result.user;
                    console.log(result.user);
                    if (email) {
                        //check user exit ot not
                        const existUser = await checkUserExitOrNot(email)
                        console.log("existUser", existUser);
                        if (existUser) {
                            // update user by email
                            console.log("update user");
                            loginAccountDataSaveDatabase({ email, provider: "google" })

                        } else {
                            console.log("create new user");
                            // make random user name 
                            const username = await makeRandomUsername(displayName)
                            console.log("username", username);
                            //new user data send database
                            const postData = {
                                name: displayName,
                                email,
                                username: username.toLowerCase(),
                                loginRecords: [{ provider: "google" }],
                            };
                            console.log(postData);
                            await createNewAccountDataPostDatabase(postData)
                        }
                    }

                }).catch((error) => {
                    const errorMessage = error.message;
                    toast.error(errorMessage.split(21, -2))

                });
        } catch {
            UseSingOut()
            toast.error("singIn field")
        }
    }


    return firebaseAuth
}



export default Auth();