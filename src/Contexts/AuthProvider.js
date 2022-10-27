import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const AuthContext =createContext()
const auth= getAuth(app)
const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)

    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login =( email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password )
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const signInwithProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const emailVarification = () => {

        return sendEmailVerification(auth.currentUser)
     
          
      };
      const userInformationProviding = (profile) => {
        return updateProfile(auth.currentUser, profile);
      };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        //   if (currentUser === null || currentUser.emailVerified) {
            setUser(currentUser);
        //   }
       
          setLoading(false);
        });
        return () => {
          unSubscribe();
        };
      }, []);





    const authInfo={user, createAccount , signInwithProvider, logOut, emailVarification, userInformationProviding , login, setLoading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;