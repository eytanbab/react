import { useState } from 'react';
import { FaBook } from 'react-icons/fa';
import { BsToggle2Off, BsToggle2On, BsMoon, BsSun } from 'react-icons/bs';

const Nav = ({lightMode, setLightMode}) => {
  
  return (
    <nav className='flex h-16 w-full items-center justify-between bg-gray-100 p-2  px-6'>
      <FaBook size={30} />
      <div className='flex items-center gap-8'>
        <button onClick={() => setLightMode(!lightMode)}>
          {lightMode ? <BsToggle2Off size={30} /> : <BsToggle2On size={30} />}
        </button>
        <div className='flex items-center justify-center '>
          {lightMode ? <BsSun size={20} /> : <BsMoon size={20} />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
