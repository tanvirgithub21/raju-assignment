import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";


const UseSingOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.removeItem("login_user")
    }).catch((error) => {
        // An error happened.
        toast.error("Logout field")
    });

}


export default UseSingOut