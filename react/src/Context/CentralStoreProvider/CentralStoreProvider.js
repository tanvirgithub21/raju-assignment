import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, createContext, useEffect } from 'react';
import auth from '../../fierbaseConfig';
import Auth from "../firebaseAuth/firebaseAuth"
export const CentralStore = createContext();
const CentralStoreProvider = (props) => {


    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(true);




    const [store] = useState({
        firebaseAuth: Auth,
        user,
        loading
    })

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user observing");
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <CentralStore.Provider value={store}>
            {props.children}
        </CentralStore.Provider>
    );
}
export default CentralStoreProvider;