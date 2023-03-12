import React from 'react';

function Tool({ data }) {
  return (
    <div className='flex h-full w-[36rem] flex-col items-center justify-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-lg uppercase text-gray-400'>The terminology...</h1>
        <h1 className='text-6xl uppercase'>{data.name}</h1>
        <p className='w-96 font-barlow text-lg tracking-widest	'>
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default Tool;
