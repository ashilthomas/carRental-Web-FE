import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { headerBar } from '../../types/Utils'
import { Link } from 'react-router-dom'
import DarkModeToggle from '../DarkMode/DarkMode'


function Header({ setOpen, open }: headerBar) {

  const navigation = [

    { name: 'Home', href: '#', current: false, },
    { name: 'About', href: '#', current: false },
    { name: 'Cars', href: '#', current: false, link: "/carcategories" },
    { name: 'Services', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
    { name: 'Pages', href: '#', current: false },
  ]
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <header className="absolute top-0 left-0 right-0 z-20 ">

      <Disclosure as="nav" className="bg-inherit">

        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}

              {
                open ? "" : <button onClick={() => setOpen(true)} ><span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                  </svg>

                </span></button>
              }

            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Link to={"/"}>
                  <h2 className='text-3xl font-bold text-white'>Prem<span className='text-secondary'>ium</span></h2>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 items-center ">
                  {navigation.map((item) => (
                    <>
                      <div className='flex items-center px-2 py-2'>
                        <Link to={item.link as string}>

                          <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white ' : 'text-white hover:text-secondary ',
                              'rounded-md  text-sm font-light ',
                            )}
                          >
                            {item.name}
                            {/* <Dropdown label="Options" items={items} /> */}





                          </a>
                        </Link>

                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


              <div className='hidden md:block mr-3'>
                <Link to={"/login"}>     <button className='py-2 px-10 bg-secondary text-white rounded-full ml-3 font-normal text-sm'>
                  Sigin
                </button></Link>
              </div>
              <DarkModeToggle />


              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/adminDashbord"}>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Admin
                      </a>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  )
}

export default Header