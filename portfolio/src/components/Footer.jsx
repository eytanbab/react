import React from 'react';
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiFillGithub,
} from 'react-icons/ai';
const Footer = ({ pageNextHandle, pagePrevHandle }) => {
  return (
    <div>
      <div className='flex w-full items-center justify-between self-end justify-self-end '>
        <button className='p-1' onClick={pagePrevHandle}>
          <h1 className='flex flex-1 flex-row-reverse items-center gap-2 bg-gradient-to-r from-[#963D5A] to-[#E07A5F] bg-clip-text text-3xl font-medium uppercase text-transparent transition-transform duration-300 ease-in-out hover:scale-105'>
            prev
            <AiFillCaretLeft className='fill-slate-50' />
          </h1>
        </button>
        <button className='p-1' onClick={pageNextHandle}>
          <h1 className='flex flex-1  items-center gap-2 bg-gradient-to-r from-[#963D5A] to-[#E07A5F] bg-clip-text text-3xl font-medium uppercase text-transparent transition-transform duration-300 ease-in-out hover:scale-105'>
            next
            <AiFillCaretRight className='fill-slate-50' />
          </h1>
        </button>
      </div>
      <div className=' flex w-full justify-center  bg-slate-900 p-4'>
        <a href='https://github.com/eytanbab' className='text-5xl'>
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
