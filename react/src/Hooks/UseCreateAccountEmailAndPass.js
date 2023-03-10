import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const UseCreateAccountEmailAndPass = (email, pass) => {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
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
            toast.error(errorMessage)
        });
}



export default UseCreateAccountEmailAndPass