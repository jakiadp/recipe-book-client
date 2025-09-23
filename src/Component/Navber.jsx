import { ChefHat } from 'lucide-react';
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contex/AuthProvider';
;

const Navber = () => {

  const {logOut,user,} = use(AuthContext);

    const handleLogout = () => {
    console.log('user trying to logout');
    logOut()
    .then(() => {
      alert("Logout successful.")
    })
    .catch((error) => {
      console.log(error);
    })
  }



    return (

      <nav className="mx-auto w-11/12 bg-emerald-700 text-white px-6 py-4  ">
      <div className=" flex items-center justify-around">


        {/* Navigatin Links */}
         <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <NavLink to="/">Home</NavLink>
       <NavLink to="/addRecipe">Add Recipe</NavLink>
       <NavLink to="/">Profile</NavLink>
      </ul>
    </div>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <ChefHat className="h-6 w-6" />
          <span className="text-xl font-semibold">CookMedia</span>
          <p>{user && user.email }</p>
        </div>
          </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-5">
           <NavLink className="relative pb-1 text-black hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300" to="/">Home</NavLink>
       {
        user ? (<NavLink className="relative pb-1 text-black hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300" to="/addRecipe">Add Recipe</NavLink>)
            :  <NavLink className="relative pb-1 text-black hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300" to="/logIn">Add Recipe</NavLink>       }
       {/* <NavLink className="relative pb-1 text-black hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300" to="/">Profile</NavLink> */}
    </ul>
    </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
         
           { 
          user ?( <>
                 <button onClick={handleLogout} className="text-white hover:bg-emerald-600">Logout</button>
                  <NavLink to="/profile" className="text-white hover:bg-emerald-600">
            Profile
          </NavLink>
          </>)
          :
         (<>
         <Link to="logIn" className="text-white hover:bg-emerald-600">Login</Link>
            <NavLink to="/register" className="text-white hover:bg-emerald-600">
            Register
          </NavLink>
         </>)
        }
         
         
        </div>
      </div>
    </nav>
    );
};

export default Navber;


