import React, {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged  } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
};

const signUser = (email, password) =>{
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
    }

    return (
        <AuthContext value={userInf}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;