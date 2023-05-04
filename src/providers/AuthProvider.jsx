import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app)
const providerForGoogle = new GoogleAuthProvider();
const providerForGithub = new GithubAuthProvider();
const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email, password) =>{
    setLoading(true)

    return signInWithEmailAndPassword(auth, email, password)
   }
  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }
 const googleProvider = () =>{
       setLoading(true)
    return signInWithPopup(auth, providerForGoogle) 
 }

 const githubProvider =() =>{
    setLoading(true)
    return signInWithPopup(auth, providerForGithub)
 }

const userProfileUpdate = (loggedUser, photo) =>{
    setLoading(true)
    return updateProfile(loggedUser, photo)
}

   useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, loggedUser =>{
       setUser(loggedUser)
       setLoading(false)
    })

    return () =>{
        return unsubscribe()
    }
   },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleProvider,
        userProfileUpdate,
        githubProvider
      
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;