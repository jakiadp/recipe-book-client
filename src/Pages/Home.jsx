import React from 'react';
import Banar from '../Component/Banar';
import Foodu from '../Component/Foodu';
import { useLoaderData } from 'react-router';
import RecipeCard from '../Component/RecipeCard';
import MySection from '../Component/MySection';


const Home = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    return (

        <div className=''> 
        
<Banar></Banar>
<div className='mt-10 mb-5 items-center text-center'> 
    <h1 className='text-3xl font-bold '> All Recipes pages </h1>

<p className='text-xl mt-5 '>This recipe is simple, delicious, and nutritious, perfect for everyday meals or special occasions. <br />
 Made with fresh ingredients and balanced flavors, it is easy enough for beginners to follow while still enjoyable for experienced cooks.
    <br /> With its healthy twist and comforting taste, this dish is sure to become a favorite at your table.</p>
</div>
<div className='grid grid-cols-1 md:grid-cols-3  gap-6 mb-20'>
    {
        recipes.map(recipe => <RecipeCard 
            key={recipe._id}
            recipe={recipe}>

        </RecipeCard>)
    }
</div>
<MySection></MySection>
<Foodu></Foodu>
           
        </div>
    );
};

export default Home;