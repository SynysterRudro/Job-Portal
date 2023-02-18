import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const [message, setMessage] = useState('');
    const { emailPasswordSignUp } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password);

        handleSignUp(email, password);
    }


    const handleSignUp = (email, passoword) => {
        emailPasswordSignUp(email, passoword)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => setMessage(error.message))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create Account now!</h1>
                        <p className="py-6">Please create account on our website in order to enjoy our total service
                            <FaGoogle className='text-3xl hover:text-red-500 mt-5'></FaGoogle>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                        <div>
                            <label className="text-sm sr-only">Your name</label>
                            <input name='name' id="name" type="text" placeholder="Your name - Optional" className="w-full rounded-md focus:ring focus:ring-violet-400 p-2 text-black dark:border-gray-700" />
                        </div>
                        <div>
                            <label className="text-sm sr-only">photo url</label>
                            <input id="name" name='photo' type="text" placeholder="Your photo url - Optional" className="w-full rounded-md focus:ring focus:ring-violet-400 text-black p-2 dark:border-gray-700" />
                        </div>
                        <div>
                            <label className="text-sm sr-only">Email address</label>
                            <input id="lastname" name='email' type="text" placeholder="Email address - Required" className="w-full rounded-md focus:ring focus:ring-violet-400 text-black p-2 dark:border-gray-700" required />
                        </div>
                        <div>
                            <label className="text-sm sr-only">Email address</label>
                            <input id="lastname" name='password' type="passoword" placeholder="Password - Required" className="w-full rounded-md focus:ring focus:ring-violet-400 text-black p-2 dark:border-gray-700" required />
                        </div>

                        <button type="submit" className="w-full py-2 font-semibold rounded dark:bg-violet-400 hover:bg-violet-300 dark:text-gray-900">Sign Up</button>
                        <p>Have an account? <Link className='text-blue-600' to='/login'>Login</Link></p>
                        <p>{message}</p>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;