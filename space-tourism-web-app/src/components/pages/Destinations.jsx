import React from 'react';

import { Link, Outlet } from 'react-router-dom';

function Destinations() {
  return (
    <div className='page justify-around bg-destination-desktop'>
      <div className='flex gap-6 text-4xl text-white'>
        <h1>01</h1>
        <h1>PICK YOUR DESTINATION</h1>
      </div>
      <div className='flex flex-col gap-12'>
        <div className='flex gap-8 text-2xl'>
          <Link to='/destination/moon'>
            <button className='btn-navbar flex h-10'>MOON</button>
          </Link>
          <Link to='destination/mars'>
            <button className='btn-navbar h-10'>MARS</button>
          </Link>
          <Link to='destination/europa'>
            <button className='btn-navbar h-10'>EUROPA</button>
          </Link>
          <Link to='destination/titan'>
            <button className='btn-navbar h-10'>TITAN</button>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Destinations;
