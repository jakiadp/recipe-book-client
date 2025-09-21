import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navber from '../Component/Navber';

const RecipeDetails = () => {
    const data = useLoaderData();
    const { _id } = useParams();
    const [res, setRes] = useState({});
    
console.log(data, _id,res);

useEffect(() =>{
    const recipeDetails = data.find((singleRecipe) => singleRecipe._id == _id )
    setRes(recipeDetails);

},[data, _id] )

    return (
        <div>
         <Navber></Navber>
         <div>
           
         </div>
        </div>
    );
};

export default RecipeDetails;