import React from 'react';
import { NavLink } from 'react-router';

const RecipeCard = ({recipe}) => {
    const {photo,title,_id,} = recipe;
    return (
     <div className='w-11/12 mx-auto'>

     
        <div className='w-9/12 mx-auto pl-15 ml-10 mt-20 items-center'>
           
           <div className=" bg-base-200 w-96 shadow-sm rounded-2xl hover:shadow-2xl">
  <figure>
    <img
      src={photo}
className='w-100 h-80 p-5 rounded-2xl'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>This recipe is simple, delicious, and nutritious, perfect for everyday meals or special occasions.</p>
    <div className="card-actions justify-star">
      <NavLink to={`/recipeDetails/${_id}`} className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold ">See Details</NavLink>
    </div>
  </div>
</div>
        </div>

     </div>
    );
};

export default RecipeCard;