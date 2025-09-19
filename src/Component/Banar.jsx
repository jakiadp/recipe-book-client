import React from 'react';
import banarImage from '../assets/burgerbn.png';

const Banar = () => {
    return (
        <div>
             <section className="bg-emerald-700 text-white py-16 px-6 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center p-10">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance ">
            The Easiest Way To Make Your Favorite Meal
          </h1>
          <p className="text-lg text-emerald-100 leading-relaxed">
            Discover 1000+ recipes in your hand with the best recipe. Help you to find the easiest way to cook.
          </p>
                   <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold "> Explore Recipes</button>
        </div>

        {/* Right Content - Food Images and Reviews */}
        <div className="relative">
          <div className="relative">
            {/* Main food image placeholder */}
            <div className="w-full h-80 bg-emerald-600 rounded-2xl flex items-center justify-center">
             <img src={banarImage} width={480}
                height={320}
                className="rounded-2xl object-cover" alt="" />
                         </div>

            {/* Review Cards */}
            
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Banar;