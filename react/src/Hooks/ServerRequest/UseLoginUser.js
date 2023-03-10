import axios from "axios"
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const UseLoginUser = (data, userUid) => {

    // login data save
    const options = {
        url: 'http://localhost:3000/api/home',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: data
    };
    axios(options)
        .then(response => {
            response && toast.success("Login successfully")
        })
        .catch(err => {
            // getAuth().deleteUser(userUid)
            err && toast.error("Login field")
        })
};

export default UseLoginUser;