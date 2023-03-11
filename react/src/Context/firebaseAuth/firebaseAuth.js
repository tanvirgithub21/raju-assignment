import axios from "axios";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";



const Auth = () => {

    const firebaseAuth = {}

    // saved create new account information database
    const createAccountDataSaveDatabase = (data, userUid) => {
        // get all username 
        axios(`${process.env.REACT_APP_SERVER_URL}user/all/username`)
            .then(async res => {
                console.log("inner server post", res.data.result);

                // check username valid or not 
                const validUserName = res.data.result.includes(data.username)
                console.log(validUserName);

                if (!validUserName) {
                    // post new user data in database
                    console.log("enter", `${process.env.REACT_APP_SERVER_URL}user/create`);

                    axios({
                        url: `${process.env.REACT_APP_SERVER_URL}user/create`,
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        data: data
                    })
                        .then(res => {
                            const { email } = res.data.result;
                            localStorage.setItem('login_user', email)
                            toast.success("Create account Successfully")
                        })
                        .catch(err => toast.error("Create account field"))


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


    return firebaseAuth
}



export default Auth();