import React, { useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks';
import instance from '../../../Axios/Instance';
import { setAdminVehicles, setError, setLoading, } from '../../../Redux/vechicleSlice';
import AdminSlider from '../AdminSlider/AdminSlider';
import { toggleAdminSlide } from '../../../Redux/globelSlice';
import Loader from '../../Loader/Loader';
import DeleteModel from '../../DeleteModel/DeleteModel';
import EditModel from '../../EditModel/EditModel';

function AllVechicles() {
  const dispatch = useAppDispatch();
  const { adminVehicles, loading, error } = useAppSelector((state) => state.vehicles);

  const fetchVehicles = useCallback(async () => {
    dispatch(setLoading());
    try {
      const response = await instance.get('vechicle/getallvechicles');
      console.log("res", response.data);

      dispatch(setAdminVehicles(response.data.vechicle)); 
    } catch (err: any) {
      dispatch(setError('Failed to fetch vehicles')); 
    }
  }, [dispatch,]);

  // Toggle vehicle availability
  const toggleAvailability = useCallback(async (vehicleId: string, currentAvailability: boolean) => {
    try {
      await instance.put(`vechicle/updateavilablity/${vehicleId}`, {
        available: !currentAvailability, 
      });

     
      fetchVehicles(); 
    } catch (error) {
      console.error('Error toggling vehicle availability:', error);
    }
  }, []);


  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  const openNav = () => {
    dispatch(toggleAdminSlide());
  };
  if (loading) return <Loader />; 
  if (error) return <p>Error: {error}</p>; 

  return (

    <div className="overflow-x-auto flex bg-primary h-[100vh] ">
      <AdminSlider />
      <span className="text-3xl ml-4  cursor-pointer mb-3 text-white" onClick={openNav}>
        &#9776;
      </span>
      <div className='w-[1300px] m-auto py-4 pr-4'>


        <table className="min-w-full dark:bg-gray-900 bg-white  shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-gray-600">Id</th>
              <th className="text-left px-6 py-3 text-gray-600">Image</th>
              <th className="text-left px-6 py-3 text-gray-600">Car Name</th>
              <th className="text-left px-6 py-3 text-gray-600">Price</th>
              <th className="text-left px-6 py-3 text-gray-600">Status</th>
              <th className="text-left px-6 py-3 text-gray-600">Delete</th>
              <th className="text-left px-6 py-3 text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {adminVehicles?.map((item, i) => (
              <tr key={item._id} className="border-b">
                <td className="px-6 py-4">{i + 1}</td>
                <td className="px-6 py-4 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 mr-3">
                    <img className="h-8 w-8 rounded-full object-cover" src={item?.carImage} alt={item?.carModel} />
                  </div>
                </td>
                <td className="px-6 py-4">{item?.carModel}</td>
               
                <EditModel id={item._id} fetchVehicles={fetchVehicles} value={item.pricePerDay} />
                <td className="px-6 py-4">
                 
                  <select
                    value={item.available ? 'available' : 'not available'}
                    onChange={() => toggleAvailability(item._id, item.available)} 
                    className="bg-gray-200 p-2 rounded"
                  >
                    <option value="available">Available</option>
                    <option value="not available">Not Available</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <DeleteModel id={item._id} fetchVehicles={fetchVehicles} />
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 bg-gray-200 rounded-full">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table></div>
    </div>

  );
}


export default AllVechicles