import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../media/thedevhub.png';

const Footer = () => {
  return (
    <div className="font-montserrat dark:bg-gray-800 sticky bottom-0">
        <div className="mx-auto max-w-screen text-center">
           <div className='flex justify-center items-center'>
           <div className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="mr-2 h-12" src={logo} />    
            </div>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023-2024 <span href="#" class="hover:underline">The Dev Hub™</span>. All Rights Reserved.</span>
           </div>
            <div className="flex justify-center">
            <p className="my-1 text-gray-500 dark:text-gray-400">Open-source web application to facilitate job searching process for new fellow in Technology field.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer