import React from 'react';

function Planet({ data }) {
  return (
    <div className='flex w-[36rem] flex-col items-center justify-center gap-12 text-white'>
      <h1 className='self-start text-9xl uppercase'>{data.name}</h1>
      <p className='font-barlow text-2xl'>{data.description}</p>
      <div className=' h-px w-full bg-white/30' />
      <div className='flex w-full justify-around text-2xl'>
        <div>
          <h1 className='font-barlow '>AVG. DISTANCE:</h1>
          <h1 className='text-5xl'>{data.distance}</h1>
        </div>
        <div>
          <h1 className='font-barlow '>EST. TRAVEL TIME:</h1>
          <h1 className='text-5xl'>{data.travel}</h1>
        </div>
      </div>
    </div>
  );
}

export default Planet;
