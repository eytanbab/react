import React from 'react';
import data from '../../../helpers/starter-code/data.json';
import { Link } from 'react-router-dom';

function Destination() {
  const destinations = data.destinations;
  console.log(destinations);

  return (
    <div className='page justify-around bg-destination-desktop'>
      <div className='flex gap-6 text-4xl text-white'>
        <h1>01</h1>
        <h1>PICK YOUR DESTINATION</h1>
      </div>
      <div className='flex gap-8 text-2xl'>
        <button className='btn-navbar h-10'>MOON</button>
        <button className='btn-navbar h-10'>MARS</button>
        <button className='btn-navbar h-10'>EUROPA</button>
        <button className='btn-navbar h-10'>TITAN</button>
      </div>
    </div>
  );
}

export default Destination;
