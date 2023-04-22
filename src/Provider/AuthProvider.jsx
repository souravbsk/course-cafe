import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateCurrentUser, updatePhoneNumber, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    //create user
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //display Name se 
    const displayName = (currentUser,name) => {
        return updateProfile(currentUser,{
            displayName:name,
        })
    }

    //login user
    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    } 


    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
        })
        return () => unSubscribe();
    },[])

    console.log("current User", user);


    const authInfo = {
        user,
        createUser,
        loginUser,
        displayName,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;