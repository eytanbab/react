import React from 'react';

const Planet = ({ data }) => {
  console.log(data);

  return (
    <div className='flex flex-col items-center gap-2 text-center'>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <div className='h-px w-full bg-gray-100/20' />
      <h2 className='uppercase'>AVG Distance</h2>
      <p>{data.distance}</p>
      <h2 className='uppercase'>EST. Travel Time</h2>
      <p>{data.travel}</p>
    </div>
  );
};

export default Planet;
