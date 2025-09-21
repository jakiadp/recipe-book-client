import React from 'react';
import image1 from '../assets/image1.jpg'
import image11 from '../assets/image11.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

const Foodu = () => {
    return (
<div className='w-11/12 mx-auto items-center'>
<h1 className='font-bold text-3xl text-center mb-5'>Food from Our Couminite </h1>
<div className='text-center items-center grid grid-cols-1 md:grid-cols-2 gap-10 p-30'>

{/* 1 */}
<div className="card  w-96 shadow-sm hover:shadow-2xl bg-base-300">
   <figure>
    <img
      src={image3}
      alt="Shoes"
      className='p-5'/>
  </figure>  <div className="card-body ">
    <h2 className="card-title">
      Pudding Derset
      <div className="badge badge-secondary">Propural</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Categori</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

{/* 2 */}
<div className="card bg-base-300 w-96 shadow-sm hover:shadow-2xl">
  <figure>
    <img
    
      src={image4}
      alt="Shoes" 
      className='p-5'/>
  </figure>  <div className="card-body">
    <h2 className="card-title">
      Egg Pleter
      <div className="badge badge-secondary ">Femus</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Categori</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

{/* 3 */}
<div className="card bg-base-300 w-96 shadow-sm hover:shadow-2xl">
  <figure>
    <img
      src={image1}
      alt="Shoes"
      className='p-5'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Pron fry
      <div className="badge badge-secondary">Food</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Categori</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
{/* 4
 */}

 <div className="card bg-base-300 w-96 shadow-sm hover:shadow-2xl ">
  <figure>
    <img
      src={image11}
      alt="Shoes"
      className='p-5' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Beff Carry
      <div className="badge badge-secondary">Femus</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Categori</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

</div>
</div>


 

          
        
    );
};

export default Foodu;