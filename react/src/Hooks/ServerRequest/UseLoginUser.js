import axios from "axios"
import { toast } from "react-toastify";
import UseSingOut from "../UseSignOut";

const UseLoginUser = (data) => {

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

export default UseLoginUser;