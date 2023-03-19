import React from 'react';

const Box = (props) => {
  return (
    <div className='relative mx-6 flex flex-col gap-4 rounded-md bg-white px-4 pt-12 pb-8'>
      <div className='absolute -top-10  left-0 right-0 m-auto h-20  w-20   rounded-full bg-[#3A3055]'>
        <img
          src={props.Icon}
          className='absolute top-4 left-0 right-0 m-auto h-12 w-12 '
        />
      </div>

      <h1 className='text-2xl font-bold text-gray-800'>{props.title}</h1>
      <p className='font-medium text-gray-400'>{props.desc}</p>
    </div>
  );
};

export default Box;
