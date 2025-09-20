import React from 'react';
import { NavLink } from 'react-router';

const RecipeCard = ({recipe}) => {
    const {photo,title,_id,} = recipe;
    return (
        <div className='w-9/12 mx-auto pl-15 ml-10 mt-20 items-center'>
           
           <div className=" bg-base-200 w-96 shadow-sm">
  <figure>
    <img
      src={photo}
className='w-100 h-80'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>This recipe is simple, delicious, and nutritious, perfect for everyday meals or special occasions.</p>
    <div className="card-actions justify-end">
      <NavLink to={`/recipeDetails/${_id}`} className="btn btn-primary">See Details</NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default RecipeCard;