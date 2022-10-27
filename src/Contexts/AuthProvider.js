import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const AuthContext =createContext()
const auth= getAuth(app)
const AuthProvider = ({children}) => {


    const [user, setUser] = useState({displayName:"Sujon"})

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login =( email, password) => {
        return signInWithEmailAndPassword(auth, email, password )
    }

    const signInwithProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }





    const authInfo={user, createAccount , signInwithProvider }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;