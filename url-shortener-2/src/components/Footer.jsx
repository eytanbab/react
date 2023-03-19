import React from 'react';
import BgBoost from '../assets/images/bg-boost-mobile.svg';

const Footer = ({ inputRef }) => {
  const handleScroll = (inputRef) => {
    window.scrollTo({
      top: inputRef.offsetTop - 50,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='relative flex h-80 w-full flex-col items-center justify-center  gap-4 overflow-hidden  bg-[#3A3055] p-8'>
      <img
        src={BgBoost}
        alt='illustration'
        className=' 0 absolute left-12 z-20 scale-125'
      />
      <div className='z-20 flex flex-col items-center justify-center gap-4 py-4'>
        <h1 className='text-3xl font-bold text-white'>
          Boost your links today
        </h1>
        <button
          className=' max-w-xs rounded-full bg-[#2BD1D1] px-10 py-4 font-bold tracking-widest text-white '
          onClick={() => handleScroll(inputRef.current)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Footer;
