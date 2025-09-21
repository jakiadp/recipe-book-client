import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
<div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
	<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
	<p className="text-sm text-center text-gray-600">Dont have account?
		<Link to='/logIn' rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</Link>
	</p>
      <form noValidate="" action="" className="space-y-8">
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
		</div>
		<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600  text-gray-50">Sign Up</button>
	</form>

    </div>

        </div>
    );
};

export default Register;

  