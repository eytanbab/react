import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MoonImg from '../../assets/destination/image-moon.png';
import MarsImg from '../../assets/destination/image-mars.png';
import EuropaImg from '../../assets/destination/image-europa.png';
import TitanImg from '../../assets/destination/image-titan.png';

function Destinations() {
  const [planetImg, setPlanetImg] = useState('');
  return (
    <div className='page flex justify-around bg-destination-desktop'>
      <div className='flex-col gap-8'>
        <div className='flex gap-6 py-12 text-4xl text-white'>
          <h1 className='font-bold text-gray-400'>01</h1>
          <h1>PICK YOUR DESTINATION</h1>
        </div>
        <img src={planetImg} alt='' />
      </div>
      <div className='flex h-96 flex-col gap-12'>
        <div className='flex gap-8 text-2xl'>
          <Link to='/destination/moon'>
            <button
              className='btn-navbar flex h-10'
              onClick={() => setPlanetImg(MoonImg)}
            >
              MOON
            </button>
          </Link>
          <Link to='/destination/mars'>
            <button
              className='btn-navbar h-10'
              onClick={() => setPlanetImg(MarsImg)}
            >
              MARS
            </button>
          </Link>
          <Link to='/destination/europa'>
            <button
              className='btn-navbar h-10'
              onClick={() => setPlanetImg(EuropaImg)}
            >
              EUROPA
            </button>
          </Link>
          <Link to='/destination/titan'>
            <button
              className='btn-navbar h-10'
              onClick={() => setPlanetImg(TitanImg)}
            >
              TITAN
            </button>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Destinations;
