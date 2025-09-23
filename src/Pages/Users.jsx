import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const user = useLoaderData();
    // console.log(user);
    return (
        <div>
            <h1>user:{user.length}</h1>
        </div>
    );
};

export default Users;