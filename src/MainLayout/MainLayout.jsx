import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
        <div >
           
           <Navber></Navber>
             <Outlet></Outlet>
             <Footer></Footer>
             
        </div>
    );
};

export default MainLayout;