import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../fierbaseConfig";




const UseSingInWithGmailAndPass = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);

        });
};

export default UseSingInWithGmailAndPass;

