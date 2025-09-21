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


const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayout,
    children: [
      {
        index: true,
        loader:()=> fetch('http://localhost:3000/recipes'),
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
        path:'/upadeteRecipe/:id',
          loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
        Component: UpdateRecipe,
      },
     
      
    ],
  },
  {
    path:'/recipeDetails/:_id',
     loader:()=> fetch('http://localhost:3000/recipes'),
    Component:RecipeDetails
  },
 
]);

export default router;