import React from 'react';
import { createBrowserRouter } from 'react-router';

import MainLayout from '../MainLayout/MainLayout';
import AddRecipe from '../Pages/AddRecipe';
import LogIn from '../Pages/LogIn';
import Register from '../Pages/Register';
import UpdateRecipe from '../Pages/UpdateRecipe';
import Error from '../Pages/Error';
import RecipeDetails from '../Pages/RecipeDetails';
import Home from '../Pages/Home';
import Users from '../Pages/Users';
import Profile from '../Pages/Profile';
import UpadateProfile from '../Pages/UpadateProfile';
import PrivateRouter from '../Contex/PrivateRouter';
import Loading from '../Pages/Loading';


const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://recipe-book-server-lemon.vercel.app/recipes'),
        hydrateFallbackElement: <Loading></Loading>,
        Component: Home ,     // ✅ ekhaneo same
      },
      {
        path: "/addRecipe",
        Component: AddRecipe, // ✅ ekhaneo same
      },
      {
        path:"/updateRecipe",
        Component:UpdateRecipe,
      },
      {
        path:"/logIn",
        Component:LogIn
      },
      {
        path:"/register",
        Component:Register
      },
      {
        path:"/*",
        Component:Error
      },
      {
         path:"/users",
         loader: () => fetch('https://recipe-book-server-lemon.vercel.app/users'),
         hydrateFallbackElement: <Loading></Loading>,
         Component:Users
      },
      {
        path:'/upadeteRecipe/:id',
          loader: ({params}) => fetch(`https://recipe-book-server-lemon.vercel.app/recipes/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
          Component: UpdateRecipe,
      },
      {
        path:'/profile',
        Component:Profile,
      },

      {
        path:'/upadateProfile',
        Component:UpadateProfile,
      }
      
     
      
    ],
  },
  {
    path:'/recipeDetails/:_id',
     loader: ()=> fetch('https://recipe-book-server-lemon.vercel.app/recipes'),
     hydrateFallbackElement: <Loading></Loading>,
    element: <PrivateRouter>
      <RecipeDetails></RecipeDetails>
    </PrivateRouter>
  },
 
]);

export default router;