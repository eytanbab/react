import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='flex h-24 w-screen items-center justify-center bg-slate-900 p-4'>
      <a href='https://github.com/eytanbab' className='text-5xl'>
        <AiFillGithub />
      </a>
    </div>
  );
};

export default Footer;
