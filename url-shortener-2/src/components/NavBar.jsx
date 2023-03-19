import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='z-30 flex w-full items-center justify-between overflow-x-hidden p-6'>
      <h1 className='text-4xl font-bold text-gray-800'>Shortly</h1>
      <button onClick={() => setIsActive((prev) => !prev)}>
        {isActive ? (
          <IoIosClose className='text-gray-400' size={36} />
        ) : (
          <GiHamburgerMenu className='text-gray-400' size={36} />
        )}
      </button>
      {isActive && (
        <div className='absolute top-20 left-0 right-0 z-50 mx-auto flex h-96 w-[calc(100vw-10vw)] max-w-md flex-col items-center justify-center rounded-lg bg-[#3A3055] text-white'>
          <div className='flex w-full flex-col  items-center gap-4 py-6 text-lg font-medium'>
            <h1>Features</h1>
            <h1>Pricing</h1>
            <h1>Resources</h1>
          </div>
          <div className='h-[1px] w-5/6 bg-gray-400/30' />
          <div className='flex w-full flex-col  items-center gap-4 py-6 text-lg font-medium'>
            <button>Login</button>
            <button className='w-5/6 rounded-full bg-[#2BD1D1] py-2   text-white'>
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
