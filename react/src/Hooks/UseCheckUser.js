import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";


const UseCheckUser = () => {
    const [user, setUser] = useState(getAuth());

    return user?.currentUser
};

export default UseCheckUser;