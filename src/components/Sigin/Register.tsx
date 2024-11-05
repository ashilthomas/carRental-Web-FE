import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import instance from '../../Axios/Instance';
import { useToast } from '@chakra-ui/react'

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setUserData } from '../../Redux/userSlice';

// Define the form schema with Yup
const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});


interface IFormInputs {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const dispatch =useAppDispatch()

const navigate =useNavigate()
  
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  // Submit handler
  const onSubmit: SubmitHandler<IFormInputs> = async(data) => {
    console.log(data);
    
   
    

 

    const response = await instance.post('adduser/register', data,{withCredentials:true});

    console.log(response.data);
      // Assuming response.data has user and token properties
      const userData = response.data.user;
      const token = response.data.token;
      sessionStorage.setItem("token",token);
  
      dispatch(setUserData({ userData, token }));

    if(response.data.success){

 
            toast({
              title:response.data.message,
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
            navigate("/")
           
      

    }else{
      toast({
        title:response.data.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })


    }
  

  
             
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="relative w-full max-w-sm">
        {/* Background Shapes */}
        <div className="absolute top-0 -left-16 w-52 h-52 bg-gradient-to-r from-blue-800 to-blue-500 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-0 -right-16 w-52 h-52 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full filter blur-xl"></div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-semibold text-white text-center mb-6">
            Register Here
          </h3>

          {/* Username Input */}
          <label htmlFor="username" className="block text-white text-sm font-medium mb-2">
           Name
          </label>
          <input
            {...register('username')}
            id="username"
            placeholder="username"
            className="w-full px-4 py-3 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

          {/* Email Input */}
          <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
            Email
          </label>
          <input
            {...register('email')}
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          {/* Password Input */}
          <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
            Password
          </label>
          <input
            {...register('password')}
            type="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-md hover:bg-gray-100 transition duration-200"
          >
            Register
          </button>

          <div className="mt-4 text-center">
            <h6 className="text-white">
             already you have an account?{' '}
              <Link to="/login" className="text-yellow-500 underline">
                Login
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

export default Register;
