import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
  return (
    <div className='flex w-full items-center justify-between  p-6'>
      <h1 className='text-4xl font-bold text-gray-800'>Shortly</h1>
      <GiHamburgerMenu className='text-gray-400' size={36} />
    </div>
  );
};

export default NavBar;
