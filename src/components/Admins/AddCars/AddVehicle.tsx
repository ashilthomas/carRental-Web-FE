
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IVehicle } from '../../../types/Utils';
import { vehicleSchema } from '../../../VechicleSchema/VechicleSchema';
import InputField from '../../InputField/InputField';
import SelectField from '../../SelectField/SelectField';
import TextAreaField from '../../TextAreaField/TextAreaField';
import AdminSlider from '../AdminSlider/AdminSlider';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {  toggleAdminSlide } from '../../../Redux/globelSlice';
import axios from 'axios';


const AddVehicle: React.FC = () => {
  const dispatch = useAppDispatch();
  const {isOpen} = useAppSelector((state)=>state.global)
  console.log(isOpen);
  
  const { register, handleSubmit, formState: { errors } } = useForm<IVehicle>({
    resolver: yupResolver(vehicleSchema),
});

const onSubmit = async (data: IVehicle) => {

  try {
      const formData = new FormData();
     
     
      formData.append('carModel', data.carModel);
      formData.append('year', data.year.toString());
      formData.append('pricePerDay', data.pricePerDay.toString());
      formData.append('available', data.available );
      formData.append('brand', data.brand);
      formData.append('type', data.type);
      formData.append('description', data.description);
      
      // Pass the details as a nested object
      formData.append('details[Transmission]', data.details.Transmission);
      formData.append('details[allWheelDrive]', data.details.allWheelDrive);
      formData.append('details[Passengers]', data.details.Passengers.toString());
      
      formData.append('location', data.location);
      formData.append('carImage', data.carImage[0]);  // File field
      

      // Handle carImage as a single file
     
      const response = await axios.post('http://localhost:3002/api/v1/vechicle/addvechicle', formData, {
          headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(response.data);
      

      if (response.status === 201) {
          console.log('Vehicle added successfully');
      } else {
          console.error('Failed to add vehicle');
      }
  } catch (error) {
      console.error('Error adding vehicle:', error);
  }
};

  

  const openNav = () => {
    dispatch( toggleAdminSlide());
  };

  return (
    <>
    
    <div className="flex bg-primary">
    <AdminSlider />
   

      <div className="max-w-7xl mx-auto  py-6 sm:px-6 lg:px-8">{
isOpen?"":

<span className="text-3xl text-white cursor-pointer mb-3" onClick={openNav}>
&#9776;
</span>

        }
    
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#1b1b1b] shadow-md rounded-lg p-6 space-y-6 text-white "
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Add a Vehicle</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Car Model */}
            <InputField
              label="Model"
              type="text"
              name="carModel"
              register={register}
              error={errors.carModel}
              className="py-2 border border-gray-300 rounded-md w-full bg-[#999]"
            />

            {/* Year */}
            <InputField
              label="Year"
              type="number"
              name="year"
              register={register}
              error={errors.year}
              className="py-2 border border-gray-300 rounded-md w-full bg-[#999]"
            />

            {/* Price Per Day */}
            <InputField
              label="Price Per Day"
              type="number"
              name="pricePerDay"
              register={register}
              error={errors.pricePerDay}
              className="py-2 border border-gray-300 rounded-md w-full bg-[#999]"
            />

            {/* Available */}
            <SelectField
              label="Available"
              name="available"
              register={register}
              error={errors.available}
              options={[
                { label: 'Available', value: 'Available' },
                { label: 'Maintance', value: 'Maintance' },
                { label: 'UnAvailable', value: 'UnAvailable' },
              ]}
              className="py-2 border border-gray-300 rounded-md w-full bg-[#999]"
            />

            {/* Car Image */}
            <InputField
              label="Car Image URL"
              type="file"
              name="carImage"
              register={register}
              error={errors.carImage}
              className="py-2 border border-gray-300 rounded-md w-full bg-[#999]"
            />

            {/* Brand */}
            <InputField
              label="Brand (ID)"
              type="text"
              name="brand"
              register={register}
              error={errors.brand}
              className="py-2 border border-gray-300 rounded-md w-full bg-[#999]"
            />

            {/* Type */}
            <InputField
              label="Type"
              type="text"
              name="type"
              register={register}
              error={errors.type}
              className="py-2 border border-gray-300 rounded-md w-full bg-[#999]"
            />

            {/* Location */}
            <InputField
              label="Location"
              type="text"
              name="location"
              register={register}
              error={errors.location}
              className="py-2 border border-gray-300 rounded-md w-full bg-[#999] "
            />
          </div>
 
       
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Transmission */}
            <InputField
              label="Transmission"
              type="text"
              name="details.Transmission" 
              register={register}
              error={errors.details?.Transmission}
              className="py-2 border border-gray-300 rounded-md w-full bg-[#999]"
            /> 

            {/* All Wheel Drive */}
            <InputField
              label="All Wheel Drive"
              type="text"
              name="details.allWheelDrive" 
              register={register}
              error={errors.details?.allWheelDrive}
              className="py-2 border border-gray-300 rounded-md w-full bg-[#999]"
            />

            {/* Passengers */}
            <InputField
              label="Passengers"
              type="number"
              name="details.Passengers"
              register={register}
              error={errors.details?.Passengers}
              className="py-2 border border-gray-300 rounded-md w-full bg-[#999]"
            />
          </div>

          {/* Description */}
          <TextAreaField
            label="Description"
            name="description"
            register={register}
            error={errors.description}
            className="py-2 border border-gray-300 rounded-md w-full bg-[#999]"
          />

          <button
            type="submit"
            className="w-full sm:w-auto mt-4 px-6 py-2 bg-secondary text-white font-semibold rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Add Vehicle
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddVehicle;
