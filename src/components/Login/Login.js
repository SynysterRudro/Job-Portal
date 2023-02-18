import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const googleProvider = new GoogleAuthProvider();

    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { provideLogin, emailPasswordLogIn } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.passoword.value;

        console.log(email, password);
        handleEmailPasswordLogin(email, password);


    }

    const handleEmailPasswordLogin = (email, password) => {
        emailPasswordLogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => setMessage(error.message))
    }


    const handleGoogleSignin = () => {
        provideLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.message(error))
    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Please Login to our website in order to enjoy our total service. <br />
                            <button onClick={handleGoogleSignin}>  <FaGoogle className='text-3xl hover:text-red-500 mt-5'></FaGoogle></button>
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
                        <p className='text-red-500'> {message}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;