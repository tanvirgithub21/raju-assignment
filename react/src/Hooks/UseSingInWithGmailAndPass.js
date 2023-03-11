import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../fierbaseConfig";
import UseLoginUser from "./ServerRequest/UseLoginUser";


const UseSingInWithGmailAndPass = (email, password) => {

    // login firebase email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (user) {
                console.log("enter save data", user, user.email);
                //Save login data in database
                UseLoginUser({ email: user.email, provider: "email " })
            }
        })
        .catch((error) => {
            //Signed id error
            const errorMessage = error.message;
            toast.error(errorMessage.slice(22, -2))
        });
};

export default UseSingInWithGmailAndPass;

