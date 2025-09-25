import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

  

const UpdateRecipe = () => {



const categoryOptions = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'];
  const cuisineOptions = ['Italian', 'Mexican', 'Indian', 'Chinese', 'Others'];



const { _id, photo,title,ingredients,instructions,cuisine,categories,prepTime,like} = useLoaderData(); 

  const handleUpdateRecipe = e => {
        e.preventDefault();
       const form = e.target;
    const formData = new FormData(form);
    const updateRecipe = Object.fromEntries(formData.entries());
    // console.log(updateRecipe);


fetch(`https://recipe-book-server-lemon.vercel.app/recipes/${_id}`,{
  method:"PUT",
  headers:{
    'content-type' : 'application/json'
  },
  body:JSON.stringify(updateRecipe)
})
.then(res => res.json())
.then(data =>{
      if(data.modifiedCount){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
      }
  
})
  
  }



    return (
        <div className='w-11/12 m-10'>
            <h1 className="text-3xl font-bold text-center mb-6" >Update Recipe</h1>


    <div className='max-w-2xl mx-auto bg-base-200 p-6 rounded-lg shadow-md hover:shadow-2xl'>
          
    <form
      onSubmit={handleUpdateRecipe}
      className="space-y-6"
    >
      

      {/* Image Upload */}
      <div>


      <div >
        <label className="block font-medium mb-1">Photo Url</label>
        <input
          type="text"
          
          
          name="photo"
          defaultValue={photo}
          className="border rounded w-full p-2"
          placeholder='Photo Url'
        />
      </div>

      {/* Title */}
      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={title}
          placeholder='Title'
          className="border rounded w-full p-2"
          required
        />
      </div>

      {/* Ingredients */}
      <div>
        <label className="block font-medium mb-1">Ingredients</label>
        <textarea
          name="ingredients"
           defaultValue={ingredients}
          type="text"
           placeholder='Ingredients'  
          rows="3"
          className="border rounded w-full p-2"
          required
        />
      </div>

      {/* Instructions */}
      <div>
        <label className="block font-medium mb-1">Instructions</label>
        <textarea
          name="instructions"
           defaultValue={instructions}
          
          type="text"
            placeholder='Ingredients'
          rows="4"
          className="border rounded w-full p-2"
          required
        />
      </div>

      {/* Cuisine Type */}
      <div>
        <label className="block font-medium mb-1">Cuisine Type</label>
        <select
          name="cuisine"
           defaultValue={cuisine}
          placeholder='Ingredients'
          className="border rounded w-full p-2"
          required
        >
          <option value="">Select cuisine</option>
          {cuisineOptions.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      {/* Preparation Time */}
      <div>
        <label className="block font-medium mb-1">Preparation Time (minutes)</label>
        <input
          type="number"
          name="prepTime"
           defaultValue={prepTime}
          placeholder='Prearation Time'
          className="border rounded w-full p-2"
          min="1"
          required
        />
      </div>

      {/* Categories */}
      <div>
        <label className="block font-medium mb-1">Categories</label>
        <div className="flex flex-wrap gap-4">
          {categoryOptions.map((cat) => (
            <label key={cat} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="categories"
                value={cat}
                defaultValue={categories}
                placeholder='Categori'
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Like Count */}
      <div>
        <label className="block font-medium mb-1">Like </label>
        <input
          type="number"
          name='like'
           defaultValue={like}
          placeholder='Like'
          className="border rounded w-full p-2 bg-gray-100 text-gray-600 mb-4"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded transition w-full"
        >
          Update Recipe
        </button>
      </div>
      
      </div>
    </form>
            </div>
        </div>
    );
};

export default UpdateRecipe;