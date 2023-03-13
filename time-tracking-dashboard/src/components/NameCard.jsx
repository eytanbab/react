import React from 'react';
import ImgJeremy from '../assets/image-jeremy.png';

function NameCard({ setTimelapseName }) {
  return (
    <div className=' bg-[#1D204B] w-80 h-60 flex flex-col rounded-2xl gap-6 justify-around'>
      <div className=' h-full flex bg-[#5746EA] items-center justify-center w-full rounded-2xl gap-4 p-2'>
        <img
          src={ImgJeremy}
          className='bg-blue-500 w-20 h-20 border-4 rounded-full'
        />
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-300 text-lg'>Report for</h1>
          <h1 className='text-2xl text-white'>Jeremy Robson</h1>
        </div>
      </div>

      <div className='flex items-center justify-around text-lg text-[#7479C5] pb-4'>
        <button
          onClick={() => {
            setTimelapseName('Day');
          }}
          className='focus:text-white'
        >
          Daily
        </button>
        <button
          onClick={() => {
            setTimelapseName('Week');
          }}
          className='focus:text-white'
        >
          Weekly
        </button>
        <button
          onClick={() => {
            setTimelapseName('Month');
          }}
          className='focus:text-white'
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

export default NameCard;
