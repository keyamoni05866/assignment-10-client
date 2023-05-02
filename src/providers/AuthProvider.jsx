import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app)
const providerForGoogle = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email, password) =>{

    return signInWithEmailAndPassword(auth, email, password)
   }
  const logOut = () =>{
    return signOut(auth)
  }
 const googleProvider = () =>{
    return signInWithPopup(auth, providerForGoogle) 
 }


   useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, loggedUser =>{
       setUser(loggedUser)
    })

    return () =>{
        return unsubscribe()
    }
   },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleProvider,
      
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;