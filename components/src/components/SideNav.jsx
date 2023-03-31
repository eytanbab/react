import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';
const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        open ? 'translate-x-0' : '-translate-x-full'
      } fixed left-0 top-0 flex h-full  w-36 grow flex-col items-center justify-start gap-6 bg-gray-800 px-4 py-6 text-gray-50 transition-all duration-300`}
    >
      <h1 className='text-3xl'>Title</h1>
      <a href='#' className='flex items-center gap-2'>
        <IoLogoFacebook />
        Link
      </a>
      <a href='#' className='flex  items-center gap-2'>
        <IoLogoFacebook /> Link
      </a>
      <a href='#' className='flex items-center gap-2'>
        <IoLogoFacebook /> Link
      </a>

      <div className='flex grow flex-col justify-end gap-4'>
        <button className='flex w-full  justify-center rounded-lg px-4 py-2 font-medium ring-2 ring-gray-200'>
          Login
        </button>
        <button className='flex w-full justify-center rounded-lg px-4 py-2 font-medium ring-2 ring-gray-200'>
          Sign Up
        </button>
      </div>

      <button onClick={() => setOpen(!open)}>
        <AiOutlineArrowLeft
          className={`${
            open ? 'rotate-0' : '-rotate-180'
          } absolute -right-5 top-1/2 h-10 w-10 rounded-full bg-gray-600 p-1 transition-all duration-300`}
        />
      </button>
    </div>
  );
};

export default SideNav;
