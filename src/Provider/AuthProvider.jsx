import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updatePhoneNumber, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
import { useLocation } from 'react-router-dom';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    //create user
    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //display Name set
    const displayName = (currentUser,name,phone) => {
        return updateProfile(currentUser,{
            displayName:name,
            phoneNumber:phone
        })
    }

    //login user
    const loginUser = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);
    } 


    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => unSubscribe();
    },[])

//log out 
const logOut = () => {

    return signOut(auth)
}
//lost password 
const lostPass = (email) => {
return sendPasswordResetEmail(auth,email);

}

//google sign in
const googleSignIn = () => {
    setLoader(true)

return signInWithPopup(auth,googleProvider);
}

// git hub sign in
const githubSignIn = () => {
    setLoader(true)

    return signInWithPopup(auth,githubProvider);
}

// facebook sign in

const facebookSignIn = () => {
    setLoader(true)

    return signInWithPopup(auth,facebookProvider)
}

    const authInfo = {
        user,
        createUser,
        loginUser,
        displayName,
        logOut,
        lostPass,
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        loader
        
    }
    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;