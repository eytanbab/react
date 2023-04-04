import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';
import Logo from '../assets/logo.svg';

const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        open ? 'w-40 items-start' : 'w-16 items-center'
      } fixed left-0 top-0 flex h-full grow flex-col justify-start gap-6 bg-gray-800 px-4 py-6 text-gray-50 transition-all duration-200`}
    >
      {open ? (
        <>
          <img src={Logo} alt='logo' className='h-8' />

          {/* LINKS */}
          <a href='#' className='flex items-center gap-2'>
            <IoLogoFacebook />
            Link
          </a>
          <a href='#' className='flex  items-center gap-2'>
            <IoLogoFacebook />
            Link
          </a>
          <a href='#' className='flex items-center gap-2'>
            <IoLogoFacebook />
            Link
          </a>
          {/* BUTTONS */}
          <div className='flex grow flex-col justify-end gap-4 self-center'>
            <button className='flex w-full  justify-center rounded-lg px-4 py-2 font-medium ring-2 ring-gray-200'>
              Login
            </button>
            <button className='flex w-full justify-center rounded-lg px-4 py-2 font-medium ring-2 ring-gray-200'>
              Sign Up
            </button>
          </div>
        </>
      ) : (
        // SIDENAV CLOSED
        <>
          <img src={Logo} alt='logo' className='h-8' />

          <a href='#' className='flex items-center gap-2'>
            <IoLogoFacebook />
          </a>
          <a href='#' className='flex  items-center gap-2'>
            <IoLogoFacebook />
          </a>
          <a href='#' className='flex items-center gap-2'>
            <IoLogoFacebook />
          </a>
        </>
      )}
      {/* ARROW TO OPEN SIDENAV */}
      <button onClick={() => setOpen(!open)}>
        <AiOutlineArrowLeft
          className={`${
            open ? 'rotate-0' : '-rotate-180'
          } absolute right-0 top-1/2 h-10 w-10 translate-x-1/2 rounded-full bg-gray-600 p-1 transition-all duration-300`}
        />
      </button>
    </div>
  );
};

export default SideNav;
