import React from 'react';
import Illustration from '../assets/images/illustration-working.svg';
import Input from './Input';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center gap-8'>
      {/* ILLUSTRATION IMAGE */}
      <img src={Illustration} alt='' />
      {/* HERO */}
      <div className=' flex w-full flex-col items-center justify-center gap-2 px-4 text-center'>
        <h1 className='text-4xl font-bold text-gray-800'>
          More than just shorter links
        </h1>
        <p className='text-gray-400'>
          Build your brand's recognision and get detailed insights on how your
          links are performing
        </p>
        <button className='rounded-full bg-[#2BD1D1] px-5 py-4 font-bold tracking-widest text-white'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
