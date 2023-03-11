import React from 'react';

function Person({ data, Img }) {
  return (
    <div>
      <div className='flex flex-col gap-8 self-center'>
        <div className='flex gap-6 py-20 font-barlow text-4xl'>
          <h1 className='font-bold text-gray-500'>02</h1>
          <h1>MEET YOUR CREW</h1>
        </div>
        <h1 className='text-4xl text-gray-400'>{data.role.toUpperCase()}</h1>
        <h1 className='text-7xl'>{data.name.toUpperCase()}</h1>
        <p className='w-[34rem] font-barlow text-2xl'>{data.bio}</p>
      </div>
      <img src={Img} width={600} className=' absolute right-64 bottom-0' />
    </div>
  );
}

export default Person;
