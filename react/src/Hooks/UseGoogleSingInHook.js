import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../fierbaseConfig";


const UseGoogleSingInHook = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const { email } = result.user;
            console.log(email);
            if (email) {

            }

        }).catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage.split(21, -2))

        });
}

export default UseGoogleSingInHook
