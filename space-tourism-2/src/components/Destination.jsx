import React from 'react';
import { useState } from 'react';
import Planet from './Planet';

const Destination = ({ data }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-10 bg-[url('../assets/destination/background-destination-mobile.jpg')] p-6">
      <div className='flex gap-2'>
        <h1 className='font font-bold opacity-25'>01</h1>
        <h1 className='uppercase'>Pick your destination</h1>
      </div>
      <img src='../assets/destination/image-titan.png' />
      <div className='flex gap-6'>
        <button onClick={() => setActive(0)}>Moon</button>
        <button onClick={() => setActive(1)}>Mars</button>
        <button onClick={() => setActive(2)}>Europa</button>
        <button onClick={() => setActive(3)}>Titan</button>
      </div>
      <div>
        {active === 0 && <Planet data={data[0]} />}
        {active === 1 && <Planet data={data[1]} />}
        {active === 2 && <Planet data={data[2]} />}
        {active === 3 && <Planet data={data[3]} />}
      </div>
    </div>
  );
};

export default Destination;
