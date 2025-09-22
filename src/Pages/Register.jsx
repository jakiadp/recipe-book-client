import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contex/AuthContex';

const Register = () => {

	const{createUser} = use(AuthContext);
	

	const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
   const {email, password,...userProfile} = Object.fromEntries(formData.entries());
    console.log(password, email,userProfile); 



	// create fire base

	createUser(email,password)
	.then(result =>{
		console.log(result.user);

     fetch('http://localhost:3000/users',{
		method:'POST',
		headers:{
			'content':'aplication/json'
		},
		body: JSON.stringify()

	 })
	 .then(res => res.json())
	 .then(data => {
		console.log('after',data)
	 })



	})
	.catch(error =>{
		console.log(error)
	})
	

}



    return (
        <div className='mx-auto w-11/12 items-center flex justify-center my-20'>
<div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800 hover:shadow-2xl">
	<h2 className="mb-3 text-3xl font-semibold text-center">Sign Up</h2>
	<p className="text-sm text-center text-gray-600">Already have account?
		<Link to='/logIn' rel="noopener noreferrer" className="focus:underline hover:underline hover:text-green-900">LogIn</Link>
	</p>
      <form onSubmit={handleRegister} action="" className="space-y-8">
		<div className="space-y-4">

 <div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Name</label>
				<input type="text" name="name" id="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			
          
		  <div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Address</label>
				<input type="text" name="address" id="address" placeholder="Address" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>

			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Phone Number</label>
				<input type="text" name="number" id="number" placeholder="Phone Number" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>


			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Photo Url</label>
				<input type="text" name="photo" id="photo" placeholder="Photo Url" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>

			 <div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>

			<div className="space-y-2">
	
					<label htmlFor="password" className="text-sm">Password</label>
					<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
		</div>
		<button  type="submit" className='bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold btn w-full'>Sign Up</button>
	</form>

    </div>

        </div>
    );
};

export default Register;

  