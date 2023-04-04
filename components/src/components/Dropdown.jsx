import React from 'react';
import { useState } from 'react';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='relative flex flex-col items-center '>
      <div
        onClick={() => setOpen(!open)}
        className='cursor-pointer rounded-lg bg-gray-800 px-4 py-2 text-gray-50'
      >
        Dropdown
      </div>
      {/* OPTIONS DIV */}
      <div
        className={`${
          open ? 'flex' : 'hidden'
        } absolute left-0 right-0 top-11 w-full flex-col items-center gap-4 rounded-lg bg-gray-800 py-2 text-gray-50`}
      >
        <a href='#' className='hover:text-gray-400'>
          Option 1
        </a>
        <a href='#' className='hover:text-gray-400'>
          Option 2
        </a>
        <a href='#' className='hover:text-gray-400'>
          Option 3
        </a>
        <a href='#' className='hover:text-gray-400'>
          Option 4
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
