import React from 'react'
import { FaChartBar, FaClipboardList, FaShoppingBag, FaUserPlus } from 'react-icons/fa';
import BarChart from '../../BarChart/BarChart';
import UserManagement from '../AdminUserMangement/UserManagement';
import AdminSlider from '../AdminSlider/AdminSlider';

import { useAppDispatch } from '../../../hooks';
import { toggleAdminSlide } from '../../../Redux/globelSlice';
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = [65, 59, 80, 81, 56, 55, 40];


function DashBoard() {
  const dispatch = useAppDispatch();
  const openNav = () => {
    dispatch(toggleAdminSlide());
  };
  return (
    <>

      <div className='bg-primary flex gap-3 h-auto'>

        <AdminSlider />

        <div className='w-[1300px] m-auto'>
        


          <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-md flex ">
            {/* Left section - 70% */}
            <div className="w-[70%] pr-6"> {/* 70% fixed width for the left section */}
              <h2 className="text-xl font-bold text-white">Today's Sales</h2>
              <p className="text-gray-400 mb-6">Sales Summary</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total Sales */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FaChartBar className="text-yellow-500 text-2xl mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">$5k</h3>
                      <p className="text-gray-400">Total Sales</p>
                      <p className="text-yellow-500 text-sm">+10% from yesterday</p>
                    </div>
                  </div>
                </div>

                {/* Total Orders */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FaClipboardList className="text-teal-400 text-2xl mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">500</h3>
                      <p className="text-gray-400">Total Order</p>
                      <p className="text-teal-400 text-sm">+8% from yesterday</p>
                    </div>
                  </div>
                </div>

                {/* Product Sold */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FaShoppingBag className="text-pink-400 text-2xl mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">9</h3>
                      <p className="text-gray-400">Product Sold</p>
                      <p className="text-pink-400 text-sm">+2% from yesterday</p>
                    </div>
                  </div>
                </div>

                {/* New Customers */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FaUserPlus className="text-blue-400 text-2xl mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">12</h3>
                      <p className="text-gray-400">New Customer</p>
                      <p className="text-blue-400 text-sm">+3% from yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section - remaining 30% */}
            <div className="flex-grow bg-gray-800 p-6 rounded-lg shadow-lg text-white">
              <BarChart labels={labels} data={data} />
            </div>
          </div>
          <UserManagement />
        </div>
      </div>
    </>


  )
}

export default DashBoard