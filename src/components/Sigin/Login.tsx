import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="relative w-full max-w-sm">
        {/* Background Shapes */}
        <div className="absolute top-0 -left-16 w-52 h-52 bg-gradient-to-r from-blue-800 to-blue-500 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-0 -right-16 w-52 h-52 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full filter blur-xl"></div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-semibold text-white text-center mb-6">
            Login Here
          </h3>

          {/* Username Input */}
          <label htmlFor="username" className="block text-white text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Email or Phone"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Input */}
          <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-md hover:bg-gray-100 transition duration-200"
          >
            Log In
          </button>
          <div>
            <h6>not loged 
              <Link to={"/register"}> <span>
                    Register
                </span>
              </Link>
               
            </h6>
          </div>

          {/* Social Logins */}
          <div className="flex mt-6 justify-between">
            <div className="flex items-center justify-center w-1/2 py-2 bg-white bg-opacity-20 text-white rounded-md hover:bg-opacity-30 transition duration-200">
              <FaGoogle className="mr-2" />
              Google
            </div>
            <div className="flex items-center justify-center w-1/2 py-2 bg-white bg-opacity-20 text-white rounded-md hover:bg-opacity-30 transition duration-200 ml-4">
              <FaFacebook className="mr-2" />
              Facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
