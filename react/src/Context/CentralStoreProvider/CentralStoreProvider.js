import React, { useState, createContext } from 'react';
import Auth from "../firebaseAuth/firebaseAuth"
export const CentralStore = createContext();
const CentralStoreProvider = (props) => {

    const [store] = useState({
        user: "user",
        firebaseAuth: Auth,
        post: "post"
    })

    return (
        <CentralStore.Provider value={store}>
            {props.children}
        </CentralStore.Provider>
    );
}
export default CentralStoreProvider;