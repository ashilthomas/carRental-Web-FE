import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import CarCard from '../../CarCard/CarCard'
import instance from '../../../Axios/Instance'
import { setLoading, setVehicles } from '../../../Redux/vechicleSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import Loader from '../../Loader/Loader'
import debounce from 'lodash.debounce'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Convertible', href: '#' },
  { name: 'Sedan', href: '#' },
  { name: 'Small Cars', href: '#' },
  { name: 'Sport Cars', href: '#' },
  { name: 'SUV', href: '#' },
]

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes:any[]) {


  return classes.filter(Boolean).join(' ')

}

function CarCategories() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [noResults, setNoResults] = useState<boolean>(false); // Tracks the search term input
  
  const { vehicles, loading, error } = useAppSelector((state) => state.vehicles);
  const dispatch = useAppDispatch();
  console.log("hjkhdskfhd",vehicles);
  

 
  const fetchCategories = async () => {
    dispatch(setLoading()); 
    try {
      const response = await instance.get(
        `vechicle/nmsearchvechicle?q=${searchTerm}&sortBy=latest&sortOrder=desc&page=${page}&limit=${limit}`
      );
      dispatch(setVehicles(response.data.vehicles)); 

      
      if(response.data.success=== false){
      setNoResults(true)
    }
     else {
      setNoResults(false); // Reset if vehicles are found
      dispatch(setVehicles(response.data.vehicles)); 
      setTotalPages(response.data.totalPages);
    }
    

    } catch (error: any) {
      console.error('Error fetching vehicles:', error);
    }
  };

  // Debounced function to delay the API call on search input change
  const debouncedFetch = debounce(() => {
    setPage(1); // Reset the page to 1 when the search term changes
  }, 500); // Delay of 500ms after user stops typing

  // Trigger the API call when `page` or `searchTerm` changes
  useEffect(() => {
    fetchCategories(); // Fetch vehicles whenever `page` or `searchTerm` changes
  }, [page, searchTerm]); // Dependencies: page and searchTerm

  // Handle search input changes
  const handleSearchChange = (e: any) => {
    console.log(e);
    
    setSearchTerm(e.target.value); // Update the search term state
    debouncedFetch(); // Trigger the debounced function to handle search
  };

 const handileSearchFilter =(val:string)=>{
 setSearchTerm(val)
  

  }

  // Pagination handler
  const handlePageChange = (newPage: number) => {

    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage); // Update the page number
    }
  };

  if (loading) return <Loader />;
  if(error) return <Loader />;
  return (
    <div className="bg-[#1b1b1b] dark:bg-black">
    <div>
      {/* Mobile filter dialog */}
      <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0  bg-[#1b1b1b] bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4 border-t border-gray-200 ">
              <h3 className="sr-only">Categories</h3>
              <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                {subCategories.map((category) => (
                  <li key={category.name}   >
                    <a href={category.href} className="block px-2 py-3">
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>

              {filters.map((section) => (
                <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900 "   >{section.name}</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                        <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`filter-mobile-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
      
          <form action="" className='border rounded-full py-3 px-2 ' >
            <input onChange={handleSearchChange} value={searchTerm} type="text" className='bg-inherit  outline-0 text-white' placeholder='Enter your car' />
            <button className="bg-secondary px-4 py-2 rounded-full mr-3">
  <span className="inline-block hover:rotate-90 duration-300">
    $
  </span>
</button>
          </form>
          {
            
          }

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                      <a
                        href={option.href}
                        className={classNames(
                          option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                          'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                        )}
                      >
                        {option.name}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
              <span className="sr-only">View grid</span>
              <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

     




        <section aria-labelledby="products-heading" className="pb-24 pt-6">
  <h2 id="products-heading" className="sr-only">
    Products
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-x-8 gap-y-10">
    {/* Filters - Sidebar */}
    <form className="hidden lg:block  h-full">
      <div className='bg-[#222] p-4 rounded-lg'>

   
      <h3 className="sr-only">Categories</h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-[#999]"
      >
        {subCategories.map((category) => (
          <li key={category.name} onClick={()=>handileSearchFilter(category.name)} >
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul>

      {filters.map((section) => (
        <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
          <h3 className="-my-3 flow-root">
            <DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm text-[#999] hover:text-gray-500">
              <span className="font-medium text-[#999]">{section.name}</span>
              <span className="ml-6 flex items-center">
                <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
              </span>
            </DisclosureButton>
          </h3>
          <DisclosurePanel className="pt-6">
            <div className="space-y-4">
              {section.options.map((option, optionIdx) => (
                <div key={option.value} className="flex items-center">
                  <input
                    defaultValue={option.value}
                    defaultChecked={option.checked}
                    id={`filter-${section.id}-${optionIdx}`}
                    name={`${section.id}[]`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      ))}
         </div>
    </form>

    {/* Main content */}
    <div className="lg:col-span-1">
      {/* Vehicle list */}
      <div>
  {noResults ? (
    // Display a "No Results" message when no vehicles are found
    <div className="text-center text-gray-500">
      <p>No vehicles found. Please try a different search term or filter.</p>
    </div>
  ) : (
    // Render the vehicles grid when results are available
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles?.map((items) => (
        <CarCard
          key={items._id} // Use _id for the key instead of carModel for uniqueness
          _id={items._id}
          carImage={items.carImage}
          carModel={items.carModel}
          pricePerDay={items.pricePerDay}
          details={items.details}
          available={items.available}
        />
      ))}
    </div>
  )}
</div>
    </div>
  </div>
  <div className="bg-[#1b1b1b] dark:bg-black">
      {/* Your UI content */}
      <div className="flex justify-center mt-8">
  {/* Previous Button */}
  <button
    onClick={() => handlePageChange(page - 1)}
    disabled={page === 1}
    className={`px-4 py-2 mx-2 rounded-full ${
      page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  </button>

  {/* Page Numbers */}
  <div className="flex space-x-2">
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={`page-${i + 1}`} // More descriptive key
        onClick={() => handlePageChange(i + 1)}
        className={`px-4 py-2 rounded-full ${
          page === i + 1 ? 'bg-secondary text-white' : 'bg-gray-200 hover:bg-primary hover:text-white'
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>

  {/* Next Button */}
  <button
    onClick={() => handlePageChange(page + 1)}
    disabled={page === totalPages}
    className={`px-4 py-2 mx-2 rounded-full ${
      page === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  </button>
</div>

    </div>
</section>

      </main>

      
   
    </div>

  </div>
  )
}

export default CarCategories

