import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updatePhoneNumber, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    //create user
    const createUser = (email,password) => {
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
        return signInWithEmailAndPassword(auth,email,password);
    } 


    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
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
return signInWithPopup(auth,googleProvider);
}

// git hub sign in
const githubSignIn = () => {
    return signInWithPopup(auth,githubProvider);
}

// facebook sign in

const facebookSignIn = () => {
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
        facebookSignIn
        
    }
    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;