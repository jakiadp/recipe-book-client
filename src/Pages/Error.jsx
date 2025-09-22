import React from 'react';
import image from '../assets/error.jpg'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='w-11/12 mx-auto'>
          <div className='flex justify-center my-6'>
            <img className='w-300 h-200' src={image} alt="" />
          </div>
           
           <div className='flex justify-center mb-4'>
                        <Link className='bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 text-xl rounded-lg font-semibold btn ' to='/'>Back To Home</Link>
           </div>
        </div>
    );
};

export default Error;