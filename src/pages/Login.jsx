// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleOneTapLogin  , GoogleLogin} from '@react-oauth/google';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useGoogleOneTapLogin({
        onSuccess: credentialResponse => {
            console.log(credentialResponse);
            navigate('/dashboard');
        },
        onError: () => {
            console.log('Login Failed');
        },
    
    });

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center w-full mb-4">
                   
                   <GoogleLogin 
                       onSuccess={credentialResponse => {
                           console.log(credentialResponse);
                           navigate('/dashboard');
                       }}
                       onError={() => {
                           console.log('Login Failed');
                       }}
                       auto_select
                       className="w-full h-12" // Adjust height here
                   />
             
           </div>
                   

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account?{' '}
                    <button
                        onClick={() => navigate('/register')}
                        className="text-blue-500 hover:underline"
                    >
                        Create a new account
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
