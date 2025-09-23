import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged  } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(loading,user);


const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
};

const signUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword (auth, email, password)
};

//  const forgetPassword = (email) => {
    
//     return sendPasswordResetEmail(auth, email);
//   };

const googleLogIn = () =>{
      
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
};

  const logOut = () => {
    return signOut(auth);
  };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    

    });

    return () => unsubscribe();
  }, []);


    const userInf ={
        user,
        setUser,
        createUser,
        signUser,
        logOut,
        googleLogIn,
        setLoading,
        loading,
    }

    return  <AuthContext value={userInf}>
             {children}
    </AuthContext>
  
  };

export default AuthProvider;