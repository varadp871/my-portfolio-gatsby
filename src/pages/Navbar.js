import React, { useState, useEffect, useRef } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'gatsby'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/Home', current: true },
    { name: 'About', href: '/About', current: false },
    { name: 'Projects', href: '/Projects', current: false },
    { name: 'Contact', href: '/Contact', current: false },
  ]);

const handleItemClick = (itemName) => {
  setNavigation((prevNavigation)=> {
    return prevNavigation.map((item) => {
      if(item.name === itemName){
        return { ...item, current: true }
      }else {
        return { ...item, current: false }
      }
    })
  })
}


  return (
    <Disclosure as="nav" className="bg-blueviolet-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Varad Panke Logo"
                src="https://s6.imgcdn.dev/eVbYM.png" 
                border="0" 
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (                 
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleItemClick(item.name)}
                    className={classNames(
                      item.current ? 'bg-violet-900 text-white' : 'text-gray-300 hover:bg-violet-900 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                    
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Disclosure>
  )
}
