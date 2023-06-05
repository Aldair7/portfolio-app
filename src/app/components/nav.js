/* Navbar for my porfolio web (artistdevv) */

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
    {({open}) => (
      <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
	<div className="relative flex h-16 justify-between">
	  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
	    {/* menu button for mobile */}
	    <Disclosure.Button className="inline-flex item-center justify-cente rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> 
	    <span className="sr-only">Open menu</span>
	    {open ? (
	      <XMarkIcon className="block h-6 w-6"  aria-hidden="true" />
	    ) : ( 
	      <Bars3Icon className="blosck h-6 w-6" aria-hidden="true" />
	    )}
	    </Disclosure.Button>

	  </div>
	  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:jutify-start">
	    <div className="flex flex-shrink-0 items-center">
	      <img className="block h-8 w-auto lg:hidden" src="" alt="My Logo" />
	    </div>
	    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
	      <a href="#" className="inline-flec items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text=gray-900"> Home </a>
	      <a href="#" className="inline-flex items-center boder-b-2 boder-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"> Dev Projects </a>
	      <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"> Design Projects </a>
	      <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"> About Me </a>
	    </div>
	  </div>
	  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
	    <button type="button" className="rounded-full bg-white p-1 text-gray-400 hover:text-grat-500 focus:outline-none focus:ring-offsite-2"> 
	      Hire me!
      {/*arreglar botton */}
	    </button>
	  </div>
	</div>
      </div>
	<Disclosure.Panel className="sm:hidden">
	  <div className="space-y-1 pt-2 pb-4">
	    <Disclosure.Button as="a" href="#" className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"> 
	      Home
	    </Disclosure.Button>
	    <Disclosure.Button as="a" href="#" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
	      Dev Projects
	    </Disclosure.Button>
	    <Disclosure.Button as="a" href="#" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
	      Design Projects
	    </Disclosure.Button>
	    <Disclosure.Button as="a" href="#" className="block border-l-4 border-transpatent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-7--">
	      About Me
	    </Disclosure.Button>
	  </div>
	</Disclosure.Panel>
      </>
    )}
  </Disclosure>
  )
}
