import React from 'react';
import { useEffect, useState } from 'react';
import Toggle from './Toggle';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className='fixed top-0 z-10 flex w-full items-center  justify-between bg-stone-50 px-6 py-12 shadow-md dark:bg-stone-900'>
      <h1 className='text-2xl text-stone-900 dark:text-stone-100'>
        Where in the world?
      </h1>
      <Toggle theme={theme} handleThemeSwitch={handleThemeSwitch} />
    </div>
  );
};

export default Navbar;
