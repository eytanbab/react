import React from 'react';

function Card({ icon, activityName, hours, timelapse, prevHours }) {
  return (
    <div className='bg-[#FF8B64] relative flex flex-col w-80 h-52 rounded-2xl justify-end bg-cover'>
      <img src={icon} className='absolute bg-no-repeat right-4 top-0' />
      <div className='flex bg-[#1D204B] items-center justify-around w-full h-40  rounded-2xl gap-4 p-2 text-white z-10'>
        <div className='flex items-end gap-10'>
          <div className='flex flex-col items-start gap-2'>
            <h1 className='text-2xl'>{activityName}</h1>
            <h1 className='text-4xl font-light'>{hours}hrs</h1>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='flex justify-end gap-1'>
              <div className='w-2 h-2 rounded-full bg-[#BCBFF2]' />
              <div className='w-2 h-2 rounded-full bg-[#BCBFF2]' />
              <div className='w-2 h-2 rounded-full bg-[#BCBFF2]' />
            </div>
            <div className='flex gap-1 text-lg text-[#BEC0F9]'>
              <h1 className=''>{`last ${timelapse} -`}</h1>
              <h1 className=''>{prevHours}hrs</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
