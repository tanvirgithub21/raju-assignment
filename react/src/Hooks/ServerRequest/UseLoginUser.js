import axios from "axios"
import { toast } from "react-toastify";

const UseLoginUser = (data) => {

    // login data save
    const options = {
        url: `${process.env.REACT_APP_SERVER_URL}user/login`,
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