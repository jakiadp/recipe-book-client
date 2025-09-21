import React from 'react';

const RecipeDetailsCard = ({recipe}) => {
    const {photo,title,ingredients,instructions,cuisine,categories,prepTime,like} =recipe;
    return (
        <div className='mt-20  w-350 hover:bg-base-200  hover:shadow-2xl rounded-2xl  mx-auto p-10'>
            <h1 className=' mb-10 text-3xl font-bold text-black text-center'>Recipe Details</h1>
           <div className='items-center text-center'>
             <img src={photo} className='w-200 h-150 pl-100' alt="" />
           </div>
            
            <div className='mt-6 px-20 '>
                <h1 className='text-2xl font-semibold mb-5'>{title}</h1>

                 <h3 className='text-xl font-semibold '>Ingredients</h3>
                            <p className='mb-5'>{ingredients}</p>

                            <h3 className='text-xl font-semibold '>Instructions</h3>
                            <p className='mb-5'>{instructions}</p>

                     <h3 className='text-xl font-semibold '>Category</h3>
                            <p className='mb-5'>{categories}</p>

                     <h3 className='text-xl font-semibold '>cuisine</h3>
                            <p className='mb-5'>{cuisine}</p>

                    <h3 className='text-xl font-semibold '>Preparetion Time</h3>
                            <p className='mb-5'>{prepTime}</p>

                            <h3 className='text-xl font-semibold '>Like</h3>
                            <p className='mb-5'>{like}</p>

           
            </div>
            <div className='flex justify-around mt-10 px-20 gap-10 '>
                 <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold w-full">Update button</button>
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold w-full ">Delete button</button>
            </div>
            
        </div>
    );
};

export default RecipeDetailsCard;


