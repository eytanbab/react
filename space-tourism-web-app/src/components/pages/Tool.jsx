import React from 'react';

function Tool({ data, img }) {
  return (
    <div className='flex  items-center justify-around gap-12 p-12'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-lg uppercase text-gray-400'>The terminology...</h1>
        <h1 className='text-6xl uppercase'>{data.name}</h1>
        <p className='w-96 font-barlow text-2xl'>{data.description}</p>
      </div>
    </div>
  );
}

export default Tool;
