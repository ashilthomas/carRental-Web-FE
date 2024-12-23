import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import instance from '../../Axios/Instance';
import { useToast } from '@chakra-ui/react';

interface VehId {
  id: string;

  fetchVehicles: () => void;
}

function DeleteModel({ id,fetchVehicles }: VehId) {
  const [open,setOpen]=useState<boolean>(false)
  const toast =useToast()
   // Set initial state to false

  const deleteVeh = async () => {
    try {
      const response = await instance.post(`vechicle/deletevehicle/${id}`);
      console.log('Vehicle deleted:', response.data);
      setOpen(false); 
      fetchVehicles()

      if(response.data.success){
        
        toast({
          title:response.data.message,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })

      }else{
        toast({
          title:response.data.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })

      }
    } catch (error:any) {
      console.error('Error deleting vehicle:', error);
      toast({
        title:error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  };

  return (
    <>
      {/* Button to open dialog */}
      <button
        onClick={() => setOpen(true)} // Set open to true on button click
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
      >
        Delete
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all 
              sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold text-gray-900">
                      Delete Vehcile
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete the vehicle? All the data will be permanently removed.
                        This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={deleteVeh} // Trigger delete function on "Deactivate" button
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                 Delete
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)} // Close modal on "Cancel"
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
}

export default DeleteModel;
