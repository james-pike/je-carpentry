'use client'

import React from 'react';
import './globals.css'
import { Button, Navbar } from 'flowbite-react';


const NavbarCTA = () => {
    const navbarStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000, // You can adjust the z-index value if needed
        
        // Add other styling as needed, like background color, box shadow, etc.
      };
    
      const buttonStyle = {
        margin: '0 10px', // Add margin to create spacing between buttons
      };

    return (



<nav className="fixed top-0 left-0 z-20 w-full bg-white border-b dark:bg-gray-900 dark:border-gray-600">
<div className='fixed top-0 z-50 w-full'>
<Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 ml-3 mr-3 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center text-2xl font-semibold text-black whitespace-nowrap dark:text-white">JEC</span>
      </Navbar.Brand>
      <div className="flex px-2 md:order-2">
      <Button style={buttonStyle} href='/home' className='bg-blue-600'>Get Quote</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
      <ul className="flex flex-col p-4 -mt-1.5 font-medium text-left border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> {/* Apply the classes here */}
      <Navbar.Link href="/" active className="bg-blue-700 rounded"> {/* Apply the class to the selected item */}
                  Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Gallery</Navbar.Link>
                <Navbar.Link href="/contact">Contact</Navbar.Link>
              </ul>
      </Navbar.Collapse>
    </Navbar>
    </div>
    </nav>

    )
}

export default NavbarCTA;