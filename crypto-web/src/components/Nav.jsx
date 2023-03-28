import React from 'react';

const Nav = () => {
  return (
    <nav className='sticky top-0 z-[100] flex h-24 w-full  items-center justify-between bg-electric-700 px-6 shadow-lg drop-shadow-md'>
      <h1 className='text-2xl font-bold'>CRYPTOFY</h1>
      <div className='flex items-center gap-6'>
        <button>Login</button>
        <button className='rounded-md px-2 py-1 ring-2 ring-electric-200 ring-opacity-30'>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
