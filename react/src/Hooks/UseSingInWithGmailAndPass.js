import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../fierbaseConfig";
import UseLoginUser from "./ServerRequest/UseLoginUser";


const UseSingInWithGmailAndPass = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (user) {
                UseLoginUser({ email, provider: "email " }, user.uid)
            }
        })
        .catch((error) => error && toast.error("Login field"));
};

export default UseSingInWithGmailAndPass;

