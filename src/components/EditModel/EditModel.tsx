import React, { useState, useEffect, memo } from 'react';
import { Dialog } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useToast } from '@chakra-ui/react';
import instance from '../../Axios/Instance';

interface VehId {
  id: string; // Vehicle ID
  fetchVehicles: () => void; // Function to fetch vehicles
  value: string | number; // The initial price value passed as a prop
}

const EditModel = memo(({ id, fetchVehicles, value }: VehId) => {
  const toast = useToast();
  
  // Manage editPrice internally for each instance of EditModel
  const [editPrice, setEditPrice] = useState(false); // State for controlling the modal visibility
  const [inputValue, setInputValue] = useState(value); // State for input value

  // Effect to update inputValue when the value prop changes
  useEffect(() => {
    setInputValue(value); // Initialize with the passed value prop
  }, [value]); // Re-run when value changes

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Update inputValue state on input change
  };

  const handleUpdate = async () => {
    try {
      await instance.put(`vechicle/updatePrice/${id}`, { updatePrice: inputValue });
      toast({
        title: 'Price updated successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      fetchVehicles(); // Refresh the vehicle list after updating the price
      setEditPrice(false); // Close the modal
    } catch (error) {
      console.error('Error updating price:', error);
      toast({
        title: 'Failed to update price.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <span
        onClick={() => setEditPrice(true)} // Open the modal on click
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
      >
        {inputValue} {/* Display the current price */}
      </span>

      <Dialog open={editPrice} onClose={() => setEditPrice(false)} className="relative z-10">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold text-gray-900">
                      Edit Price
                    </Dialog.Title>
                    <div className="mt-2">
                      <input
                        type="text"
                        value={inputValue} // Controlled input
                        onChange={handleInputChange} // Handle input change
                        className="w-full border rounded p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={handleUpdate} // Handle price update
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setEditPrice(false)} // Cancel and close the modal
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
});

export default EditModel;
