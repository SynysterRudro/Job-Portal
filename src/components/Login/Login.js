import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.passoword.value;

        console.log(email, password);


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Please Login to our website in order to enjoy our total service.
                            <FaGoogle className='text-3xl hover:text-red-500 mt-5'></FaGoogle>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">

                        <div>
                            <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
                            <input type="text" name="email" className="w-full rounded-md focus:ring focus:ring-violet-400 p-2 dark:border-gray-700 text-black" placeholder='your email address' />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="text-sm sr-only">Your password</label>
                            <input type="password" name="passoword" className="w-full rounded-md focus:ring focus:ring-violet-400 p-2 dark:border-gray-700 text-black" placeholder='your password' />
                        </div>

                        <button type="submit" className="w-full py-2 font-semibold rounded dark:bg-violet-400 hover:bg-violet-300 dark:text-gray-900">Sign In</button>
                        <p>Need an account?<Link to='/register' className='text-blue-800 underline'>Register</Link> instead </p>
                        <p>{message}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;