import React from 'react';
import { useState } from 'react';
import Switch from './Toggle';
export const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className=' flex max-h-24 w-screen items-center justify-between  py-2 px-8'>
      <h1 className='text-2xl font-medium uppercase sm:text-4xl'>
        Where in the world?
      </h1>
      <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
    </nav>
  );
};
