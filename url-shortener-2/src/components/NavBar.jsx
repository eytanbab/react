import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
  return (
    <div className='z-0 flex w-full items-center justify-between p-6 overflow-x-hidden'>
      <h1 className='text-4xl font-bold text-gray-800'>Shortly</h1>
      <GiHamburgerMenu className='text-gray-400' size={36} />
    </div>
  );
};

export default NavBar;
