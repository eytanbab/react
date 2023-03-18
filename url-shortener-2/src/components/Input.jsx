import React from 'react';

const Input = () => {
  return (
    <div className='m-6 flex  flex-col items-center justify-center gap-4 rounded-lg bg-[#3A3055] p-6 text-center'>
      <input
        placeholder='Shorten a link here..'
        className=' w-full rounded-xl p-3'
      />
      <button className='w-full rounded-lg bg-[#2BD1D1] p-3'>Shorten it</button>
    </div>
  );
};

export default Input;
