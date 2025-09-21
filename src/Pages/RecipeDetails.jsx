import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navber from '../Component/Navber';
import RecipeDetailsCard from '../Component/RecipeDetailsCard';

const RecipeDetails = () => {
    const data = useLoaderData();
    const { _id } = useParams();
    const [recipe, setRecipe] = useState({});
    
// console.log(data, _id,recipe);

useEffect(() =>{
    const recipeDetails = data.find((singleRecipe) => singleRecipe._id == _id )
    setRecipe(recipeDetails);

},[data, _id] )

    return (
        <div>
         <Navber></Navber>
         <div className='w-11/12 mx-auto'>
         <RecipeDetailsCard recipe={recipe}></RecipeDetailsCard>
           
         </div>
         
        </div>
    );
};

export default RecipeDetails;