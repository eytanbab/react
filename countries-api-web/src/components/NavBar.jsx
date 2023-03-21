import React from 'react';
import { useState } from 'react';
import Switch from './Toggle';
export const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
      } fixed top-0 z-20 flex max-h-24 w-screen items-center  justify-between  py-4 px-8 shadow-md`}
    >
      <h1 className='text-2xl font-medium uppercase sm:text-4xl'>
        Where in the world?
      </h1>
      <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
    </nav>
  );
};
