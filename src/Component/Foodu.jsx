import React from 'react';
import image1 from '../assets/image1.jpg'
import image11 from '../assets/image11.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

const Foodu = () => {
    return (
        <div  className='w-11/12 mx-auto items-center m-10 text-center'>

             <h1 className='text-3xl font-bold m-10'>Food from our Communite</h1>


              <div className=' grid grid-cols-2  gap-6 text-center items-center justify-between'>

{/* 1*/}

                <div className="card bg-base-100 w-96 shadow-sm  hover:shadow-2xl ">
  <figure className="px-10 pt-10">
    <img
      src={image1}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Pron Fryco</h2>
    <p>A popular Asian dish where cooked rice is stir-fried in a wok with vegetables, eggs, and meats like chicken or shrimp, seasoned with soy sauce and spices</p>
    <div className="card-actions">
     
    </div>
  </div>
</div>

{/* 3 */}
 <div className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl">
  <figure className="px-10 pt-10">
    <img
      src={image11}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Sambor Meet</h2>
    <p>A popular Asian dish where cooked rice is stir-fried in a wok with vegetables, eggs, and meats like chicken or shrimp, seasoned with soy sauce and spices</p>
    <div className="card-actions">
      
    </div>
  </div>
</div>

{/* 4 */}
 <div className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl" >
  <figure className="px-10 pt-10">
    <img
        src={image3}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Susio Rice </h2>
    <p>A popular Asian dish where cooked rice is stir-fried in a wok with vegetables, eggs, and meats like chicken or shrimp, seasoned with soy sauce and spices</p>
    <div className="card-actions">
    
    </div>
  </div>
</div>


 <div className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl ">
  
    <img
     src={image4}
      alt="Shoes"
      className="rounded-xl" />
 
  <div className="card-body items-center text-center">
    <h2 className="card-title">Fride Rice</h2>
    <p>A popular Asian dish where cooked rice is stir-fried in a wok with vegetables, eggs, and meats like chicken or shrimp, seasoned with soy sauce and spices</p>
    <div className="card-actions">
      
    </div>
  </div>
</div>


            </div>
        </div>
    );
};

export default Foodu;