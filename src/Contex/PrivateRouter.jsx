import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {

    const{ user,loading } = use(AuthContext);
    console.log(user);
    
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>;

    }

    if( user && user?.email) {
        return children;
    }
    return <Navigate to='/logIn'></Navigate>
    
    
};

export default PrivateRouter;