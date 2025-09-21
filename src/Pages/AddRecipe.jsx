import Swal from "sweetalert2";


const AddRecipe = () => {


  const categoryOptions = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'];
  const cuisineOptions = ['Italian', 'Mexican', 'Indian', 'Chinese', 'Others'];

 

  const handleAddRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newRecipe = Object.fromEntries(formData.entries());
    console.log(newRecipe);

    // send to recipe db
fetch('http://localhost:3000/recipes',{
  method:'POST',
  headers:{
    'content-type': 'application/json'
  },
  body: JSON.stringify(newRecipe)
})
.then(res => res.json())
.then(data =>{
  if(data.insertedId){
      console.log('after data db',data)
    Swal.fire({
  title: "Recipe added successfully",
  icon: "success",
  draggable: true
});
// form.reset()
  }

})
   


  };
    return (
        <div className='w-11/12 m-10'>
            <h1 className="text-3xl font-bold" >Add Recipe</h1>


    <div className='max-w-2xl mx-auto bg-base-200 p-6 rounded-lg shadow-md '>
     <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
       <p className='mb-5 text-center'> Food is more than just fuel for the body it’s a powerful expression of culture, tradition, and identity. Every region of the world offers unique flavors, ingredients, and cooking techniques that tell stories passed down through generations. </p>
                
    <form
      onSubmit={handleAddRecipe}
      className="space-y-6"
    >
      

      {/* Image Upload */}
      <div>


      <div >
        <label className="block font-medium mb-1">Photo Url</label>
        <input
          type="text"
          
          
          name="photo"
          className="border rounded w-full p-2"
          placeholder='Photo Url'
           required
        />
      </div>

      {/* Title */}
      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          name="title"
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
                required
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
          placeholder='Like'
          className="border rounded w-full p-2 bg-gray-100 text-gray-600 mb-4"
           required
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded transition w-full"
        >
          Add Recipe
        </button>
      </div>
      
      </div>
    </form>
            </div>
        </div>
    );
};

export default AddRecipe;