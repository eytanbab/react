import React from 'react';
import Illustration from '../assets/images/illustration-working.svg';

const Hero = ({ inputRef }) => {
  const handleScroll = (inputRef) => {
    window.scrollTo({
      top: inputRef.offsetTop - 50,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='z-20 flex flex-col justify-center gap-8 overflow-x-hidden'>
      {/* ILLUSTRATION IMAGE */}
      <img
        src={Illustration}
        alt='illustration'
        className=' absolute top-28 left-24 z-20 scale-125'
      />
      {/* HERO */}
      <div className=' flex w-full flex-col items-center justify-center gap-2 px-4 pt-96 pb-36 text-center'>
        <h1 className='text-4xl font-bold text-gray-800'>
          More than just shorter links
        </h1>
        <p className='text-gray-400'>
          Build your brand's recognision and get detailed insights on how your
          links are performing
        </p>
        <button
          className='rounded-full bg-[#2BD1D1] px-5 py-4 font-bold tracking-widest text-white'
          onClick={() => handleScroll(inputRef.current)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
