import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError('Email and Password cannot be empty.');
            return;
        }
        // Handle login logic here
        navigate('/main');
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic here
        alert('Forgot Password functionality to be implemented');
    };

    return (
      <div className='flex justify-center items-center w-full h-screen'>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h1 className="text-white text-2xl mb-4">Login</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-400">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 mt-1 rounded bg-gray-900 text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-400">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mt-1 rounded bg-gray-900 text-white"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
            <button
                onClick={handleForgotPassword}
                className="mt-4 w-full text-blue-400 hover:underline"
            >
                Forgot Password?
            </button>
             <button
                onClick={() => navigate('/signup')}
                className="mt-4 w-full text-blue-400 hover:underline"
            >
                SIGN UP
            </button>
        </div>
        </div>
    );
};

export default LoginPage;
