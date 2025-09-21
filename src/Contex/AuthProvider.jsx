import React from 'react';
import { AuthContext } from './AuthContex';

const AuthProvider = ({children}) => {
    const userInf ={
        uder:'pori@hj.com'
    }

    return (
        <AuthContext>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;