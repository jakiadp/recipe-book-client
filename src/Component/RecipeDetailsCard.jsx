import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const RecipeDetailsCard = ({recipe}) => {
    const {_id,photo,title,ingredients,instructions,cuisine,categories,prepTime,like} =recipe;

    const handleDelete =(_id) =>{
        console.log(_id);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed)
  if (result.isConfirmed) {
 
    fetch(`http://localhost:3000/recipes/${_id}`,{
        method: 'DELETE'
    })
    .then( res => res.json())
    .then(data => {
        if(data.deletedCount){
            

               Swal.fire({
      title: "Deleted!",
      text: "Your recipe has been deleted.",
      icon: "success"
    });
        }
        

             
        
       
    })


  }
});
    }


    return (
        <div className='mt-20  w-350 hover:bg-base-200  hover:shadow-2xl rounded-2xl  mx-auto p-10'>
          <Link to="/" ><div className='text-xl font-semibold mt-2 pl-1 flex ' ><GoArrowLeft /> <p className='hover:shadow-xl hover:bg-green-800'>home</p></div></Link>
            <h1 className=' mb-10 text-3xl font-bold text-black text-center'>My Recipe Details Page </h1>
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
                 <Link to={`/upadeteRecipe/${_id}`} className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 text-center rounded-lg font-semibold w-full">Update button</Link>
            <button onClick={()=> handleDelete(_id)} className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold w-full ">Delete button</button>
            </div>
            
        </div>
    );
};

export default RecipeDetailsCard;


