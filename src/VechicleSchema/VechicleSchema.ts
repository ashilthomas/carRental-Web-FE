import * as yup from 'yup';

// export const vehicleSchema = yup.object().shape({
//   carModel: yup.string().required('Model is required'),
//   year: yup.number().required('Year is required').min(1900, 'Year must be after 1900'),
//   pricePerDay: yup.number().required('Price is required').positive('Price must be a positive number'),
//   available: yup.boolean().required('Availability is required'),
//   carImage:  yup.mixed().required('Car Image URL is required'),
//   brand: yup.string().required('Brand is required'),
//   type: yup.string().required('Type is required'),
//   description: yup.string().required('Description is required'),
//   details: yup.object().shape({
//     Transmission: yup.string().required('Transmission is required'),
//     allWheelDrive: yup.string().required('All Wheel Drive is required'),
//     Passengers: yup
//       .number()
//       .required('Passengers is required')
//       .min(1, 'At least 1 passenger'),
//   }),
//   location: yup.string().required('Location is required')
// });



// export const vehicleSchema = yup.object().shape({
//   carModel: yup.string().required('Model is required'),
//   year: yup.number().required('Year is required').min(1900, 'Year must be after 1900'),
//   pricePerDay: yup.number().required('Price is required').positive('Price must be a positive number'),
//   available: yup.boolean().required('Availability is required'),
//   carImage: yup.mixed().required('Car Image is required'),
//   brand: yup.string().required('Brand is required'),
//   type: yup.string().required('Type is required'),
//   description: yup.string().required('Description is required'),
//   details: yup.object().shape({
//     Transmission: yup.string().required('Transmission is required'),
//     allWheelDrive: yup.string().required('All Wheel Drive is required'),
//     Passengers: yup.number().required('Passengers is required').min(1, 'At least 1 passenger')
//   }),
//   location: yup.string().required('Location is required'),
// });





// Add the appropriate types to the schema
export const vehicleSchema = yup.object().shape({
    carModel: yup.string().required('Model is required'),
    year: yup.number().required('Year is required').min(1900, 'Year must be after 1900'),
    pricePerDay: yup.number().required('Price is required').positive('Price must be a positive number'),
    available: yup.boolean().required('Availability is required'),
    carImage: yup
    .mixed()
    .required('A file is required')
    .test(
      'fileType',
      'Unsupported File Format',
      (value) => {
        if (!value) return false; // If there's no file
        const file = value as FileList; // Cast value to FileList
        return file.length > 0 && ['image/jpeg', 'image/png', 'image/gif'].includes(file[0].type); // Ensure the file is an image
      }
    ),
  
       
    brand: yup.string().required('Brand is required'),
    type: yup.string().required('Type is required'),
    description: yup.string().required('Description is required'),
    details: yup.object().shape({
        Transmission: yup.string().required('Transmission is required'),
        allWheelDrive: yup.string().required('All Wheel Drive is required'),
        Passengers: yup.number().required('Passengers is required').min(1, 'At least 1 passenger'),
    }),
    location: yup.string().required('Location is required'),
});
