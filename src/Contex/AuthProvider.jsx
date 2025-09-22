import React from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {


const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

    const userInf ={
 createUser,
    }

    return (
        <AuthContext value={userInf}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;