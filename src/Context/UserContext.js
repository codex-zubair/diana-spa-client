import { createContext } from "react";
import React from 'react';
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";




// Auth Context For whole project.
export const AuthUserContext = createContext(null);












// User context component for app globally.
const UserContext = ({ children }) => {




    // Data Loader For Loading Data Properly
    const [loader, setLoader] = useState(true);





    // getting the auth
    const auth = getAuth(app);


    // Google Login provider
    const googleProvider = new GoogleAuthProvider();






    // Set user state.  
    const [user, setUser] = useState({});





    // sign up with email address.
    const signUpByEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // Set User name and photo
    const setUserNameAndPhoto = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: `${name}`
        })
    }



    // Sign up By Google.
    const signUpByGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }





    // login  by Email password
    const loginByEmail = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);

    }




    // Sign out Current USer.
    const logout = () => {
        signOut(auth).then(() => {
            console.log("sign out Success Full")
        }).catch((error) => {
            console.log(error);
        });
    }





    // IF loader is true
    if (loader) {
        // Current user state
        onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);

        });
    }





    // Loader for spinner
    const [loading, setLoading] = useState(false);






    // Set user info pro providing object.
    const info = { loading, setLoading,user, loginByEmail, signUpByEmail, setUserNameAndPhoto, logout, setLoader, signUpByGoogle}





    return (
        <AuthUserContext.Provider value={info}>
            {children}
        </AuthUserContext.Provider>


    );
};

export default UserContext;