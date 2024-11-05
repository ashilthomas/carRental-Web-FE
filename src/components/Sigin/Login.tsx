import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import instance from '../../Axios/Instance';
import { useToast } from '@chakra-ui/react'
import { setUserData } from '../../Redux/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

interface LoginFormInputs {
  email: string;
  password: string;
}

// Yup validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login: React.FC = () => {
  const dispatch =useAppDispatch()
  const navigate =useNavigate()
  const  userData = useAppSelector((state)=>state.userData)
  console.log("sdjflkasdjlfjasdldfjlsf",userData.token);
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {  
   
    try {
        const response = await instance.post("adduser/login", data, { withCredentials: true });
        console.log('Login successful, response data:', response.data);
        const userData = response.data.user;
        const token = response.data.token;
        sessionStorage.setItem("token", token);
    
        dispatch(setUserData({ userData, token }));

        // Show success toast if login is successful
        if (response.data.success) {
            toast({
                title: response.data.message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
            navigate("/")

        }
    } catch (error: any) {
        // Handle different error cases with appropriate toasts
        if (error.response) {
            toast({
                title: error.response.data.message || "An error occurred",
                description: `Status code: ${error.response.status}`,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
           
        } else if (error.request) {
            toast({
                title: "No response from server",
                description: "Please check your network connection and try again.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Error setting up request",
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
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
            Login Here
          </h3>

          {/* Email Input */}
          <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            {...register('email')}
            className="w-full px-4 py-3 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          {/* Password Input */}
          <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register('password')}
            className="w-full px-4 py-3 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-md hover:bg-gray-100 transition duration-200 mt-4"
          >
            Log In
          </button>

          <div>
            <h6 className="text-white mt-4">
              Not registered?
              <Link to="/register">
                <span className="text-yellow-500 underline-offset-auto"> Register</span>
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
