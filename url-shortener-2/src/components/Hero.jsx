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
    <div className='z-20 flex flex-col justify-center gap-8 overflow-x-hidden '>
      {/* ILLUSTRATION IMAGE */}
      <img
        src={Illustration}
        alt='illustration'
        className='absolute top-28 left-24 -z-10 max-w-md scale-125 md:left-1/2 md:top-40 md:max-w-full'
      />
      {/* HERO */}
      <div
        className='relative flex w-full flex-col items-center justify-center gap-2 overflow-x-hidden bg-red-500/40 px-4 pt-96 pb-36 text-center
         md:pt-20 md:pb-[40rem]'
      >
        <h1 className='text-4xl font-bold text-gray-800 md:absolute md:top-20 md:left-0 md:px-20 md:pt-32'>
          More than just shorter links
        </h1>
        <p className='md:top-30 md:px-18 text-gray-400 md:absolute md:top-20 md:left-0 md:max-w-xl md:px-20 md:pt-44 md:text-left'>
          Build your brand's recognision and get detailed insights on how your
          links are performing
        </p>
        <button
          className='rounded-full bg-[#2BD1D1] px-5 py-4 font-bold tracking-widest text-white md:absolute md:top-96 md:left-20'
          onClick={() => handleScroll(inputRef.current)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
