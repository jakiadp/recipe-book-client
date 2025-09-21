import React from 'react';
import image from '../assets/card.png'
const MySection = () => {
    return (
  <div>
           
              <section className="bg-emerald-500 text-white py-16 px-6 w-11/12 mx-auto rounded-2xl mb-20">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center p-10 ">
                    {/* Left Content */}
                   
            
                    {/* Right Content - Food Images and Reviews */}
                    <div className="relative">
                      <div className="relative">
                        {/* Main food image placeholder */}
                        <div className="w-full h-80 bg-white rounded-2xl flex items-center justify-center">
                         <img src={image} width={480}
                            height={320}
                            className="rounded-2xl object-cover" alt="" />
                                     </div>
            
                        {/* Review Cards */}
                        
                      </div>
                    </div>


                     <div className="space-y-6">
                      <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance ">
                        Food is the fuel that powers our body and mind.
                      </h1>
                      <p className="text-lg text-emerald-100 leading-relaxed">
                       I love foods that not only taste good but also nourish me deeply. Staples like rice and wheat provide energy to keep going throughout the day. Fresh vegetables and fruits bring vitamins and minerals that help me stay healthy and strong. Proteins from eggs, fish, and nuts help build and repair the body.
                      </p>
                    </div>
                  </div>
                </section>
        </div>    );
};

export default MySection;