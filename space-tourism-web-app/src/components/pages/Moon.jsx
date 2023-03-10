import React from 'react';
import MoonImg from '../../assets/destination/image-moon.png';
function Moon({ data }) {
  console.log(data);
  return (
    <div className='flex w-96 flex-wrap bg-slate-500 text-white'>
      <img src={MoonImg} alt='img' />
      <h1 className='text-9xl'>{data.name}</h1>
    </div>
  );
}

export default Moon;
