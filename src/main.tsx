import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout/HomeLayout.tsx';
import HomePages from './pages/Homepages/HomePages.tsx';
import Login from './components/Sigin/Login.tsx';
import Register from './components/Sigin/Register.tsx';
import CartPages from './pages/Cartpages/CartPages.tsx';
import CarCategoriespage from './pages/CarCategoriespage/CarCategoriespage.tsx';
import { Provider } from 'react-redux';
import store from './Redux/store.ts';
import AdminLayout from './layouts/AdminLayout/AdminLayout.tsx';
import AddVechiclesPage from './pages/AddVechicles/AddVechicles.tsx';
import CarDetails from './components/CarDetails/CarDetails.tsx'; // Import the correct component
import NotFound from './components/NotFound/NotFound.tsx';
import AllVechicles from './components/Admins/AllVehicles/AllVechicles.tsx';
 // Create a 404 Not Found page

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <HomePages />,
      },
      {
        path: '/cart',
        element: <CartPages />,
      },
      {
        path: '/carcategories',
        element: <CarCategoriespage />,
      },
      {
        path: '/cardetails/:id',
        element: <CarDetails />, // Use CarDetails component for dynamic routes
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/addVehicles',
        element: <AddVechiclesPage />,
      },
      {
        path:"/adminAllVehicle",
        element:<AllVechicles/>
      }
    ],
  },
  // Fallback route for 404 errors
  {
    path: '*', // Wildcard route for non-existent routes
    element: <NotFound />, // Display a custom 404 page
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
