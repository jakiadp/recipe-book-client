import React, { use, useState,  } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Contex/AuthContex';
import Swal from 'sweetalert2';

const LogIn = () => {


const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  


	const {signUser,googleLogIn}= use(AuthContext);

	const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    signUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
		Swal.fire({
		  position: "top-end",
		  icon: "success",
		  title: "Your accound is created ",
		  showConfirmButton: false,
		  timer: 1500
		})
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });  
	  
	  
	  
};



const handleGoogleSign = (e) =>{
	e.preventDefault();
	googleLogIn()  
	    .then((result) => {
      const user = result.user;
      console.log("✅ Google login success:", user);
    })
    .catch((error) => {
      console.error("❌ Google login failed:", error);
    });
};


 




    return (
        <div className='w-11/12 min-h-screen  mx-auto items-center text-center my-20 flex justify-center'>
           <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-base-200 text-gray-800 hover:shadow-2xl">
	<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
	<p className="text-sm text-center text-gray-600">Dont have account?
		<Link to='/register' rel="noopener noreferrer" className="focus:underline hover:underline hover:text-green-900">SignUp</Link>
	</p>
	<div onClick={handleGoogleSign} className="my-6 space-y-4">
		<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-violet-600">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
		
	</div>
	<div className="flex items-center w-full my-4">
		<hr  className="w-full text-gray-600" />
		<p className="px-3  text-gray-600">OR</p>
		<hr  className="w-full  text-gray-600" />
	</div>

	<form onSubmit={handleLogIn} action="" className="space-y-8">
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#"  className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
		</div>
		<button  type="submit" className='bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold btn w-full'>Sign Up</button>
	</form>
</div>
        </div>
    );
};

export default LogIn;