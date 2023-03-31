import React from 'react';

const Navbar = () => {
  return (
    <nav className='fixed top-0 flex h-20 w-full items-center justify-between gap-6 bg-gray-800 px-6 text-gray-50'>
      <h1 className='grow text-3xl'>Title</h1>
      <a href='#' className=''>
        Login
      </a>
      <a href='#' className=''>
        Sign up
      </a>
    </nav>
  );
};

export default Navbar;
