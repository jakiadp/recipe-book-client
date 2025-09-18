import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import MainLayout from '../MainLayout/MainLayout';
import AddRecipe from '../Pages/AddRecipe';
import LogIn from '../Pages/LogIn';
import Register from '../Pages/Register';
import UpdateRecipe from '../Pages/UpdateRecipe';
import Error from '../Pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,     // ✅ ekhaneo same
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
      }
    ],
  },
]);

export default router;