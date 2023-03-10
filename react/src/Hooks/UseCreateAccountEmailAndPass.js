import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import UseCreateAccount from "./ServerRequest/UseCreateAccount";

const UseCreateAccountEmailAndPass = (email, pass, postData) => {
    console.log(postData);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            // Signed in 
            const userUid = userCredential.user.uid;
            // saved account information database
            UseCreateAccount(postData, userUid);
        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)

        });
}



export default UseCreateAccountEmailAndPass