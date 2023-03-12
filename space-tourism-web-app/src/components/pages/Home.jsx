import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='flex h-screen items-end justify-around pb-72'>
      <div className='mx-24 flex w-96 flex-col gap-8  text-white'>
        <p className='text-2xl'>SO, YOU WANT TO TRAVEL TO</p>
        <p className='text-9xl'>SPACE</p>
        <p className='font-barlow text-2xl'>
          Let's face it; if you want to go to space. you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to='/destination'>
        <button className='h-96 w-96 rounded-full bg-slate-50 text-6xl'>
          EXPLORE
        </button>
      </Link>
    </div>
  );
}
