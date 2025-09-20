import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navber from '../Component/Navber';

const RecipeDetails = () => {
    const data = useLoaderData();
    const { _id } = useParams();
    console.log(data, _id);

    return (
        <div>
         <Navber></Navber>
        </div>
    );
};

export default RecipeDetails;