import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../media/thedevhub.png';

const Footer = () => {
  return (
    <div className="font-montserrat p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
            <div href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="mr-2 h-20" src={logo} />    
            </div>
            <p className="my-6 text-gray-500 dark:text-gray-400">Open-source web application to facilitate job searching process for new fellow in Technology field.</p>
            <ul className="font-lora flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                <li>
                    <div className="mr-4 hover:underline md:mr-6 "><Link to='/'>Home</Link></div>
                </li>
                <li>
                    <div className="mr-4 hover:underline md:mr-6"><Link to='/about'>About</Link></div>
                </li>
            </ul>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023-2024 <span href="#" class="hover:underline">The Dev Hub™</span>. All Rights Reserved.</span>
        </div>
    </div>
  )
}

export default Footer