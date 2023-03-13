import React from 'react';

function PlayCard({
  bgColor,
  icon,
  activityName,
  hours,
  timelapseName,
  prevHours,
}) {
  return (
    <div className='bg-[#56C2E6] relative flex flex-col w-80 h-52 rounded-2xl justify-end bg-cover'>
      <img src={icon} className='absolute bg-no-repeat right-4 top-0' />
      <div className=' flex bg-[#1D204B] items-center justify-around h-40 rounded-2xl text-white z-10 '>
        <div className='flex items-end gap-8 justify-center w-full'>
          <div className='flex flex-col items-start gap-2'>
            <h1 className='text-2xl'>{activityName}</h1>
            <h1 className='text-4xl font-light'>{hours}hrs</h1>
          </div>
          <div className='flex flex-col gap-8 py-1'>
            <div className='flex justify-end gap-1'>
              <div className='w-2 h-2 rounded-full bg-[#BCBFF2]' />
              <div className='w-2 h-2 rounded-full bg-[#BCBFF2]' />
              <div className='w-2 h-2 rounded-full bg-[#BCBFF2]' />
            </div>
            <div className='flex text-lg gap-1 text-[#BEC0F9]'>
              <h1 className=''>{`Last ${timelapseName} -`}</h1>

              <h1 className=''>{prevHours}hrs</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayCard;
