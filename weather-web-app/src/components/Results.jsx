import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Results = ({ data }) => {
  const year = data?.location?.localtime.slice(0, 4);
  const date = data?.location?.localtime.slice(5, 10);
  const time = data?.location?.localtime.slice(10, 16);

  return (
    <div className='flex flex-col w-full max-w-md gap-2'>
      <section className='flex flex-col gap-1'>
        <h1 className='text-6xl'>{data?.location?.name}</h1>
        <h1 className='text-md font-thin text-neutral-300'>
          {data?.location?.region}
        </h1>
        <div className='flex flex-col items-center justify-between gap-2 py-4'>
          <h1 className='text-5xl'>{time}</h1>
          <h1 className='text-sm text-neutral-300'>{date}</h1>
          <h1 className='text-sm text-neutral-300'>{year}</h1>
        </div>
      </section>
      <section className='flex flex-col grow py-4'>
        <h1 className='text-2xl'>Temperature:</h1>
        <h1 className='text-6xl py-2'>{data?.current?.temp_c}°c</h1>
      </section>
      <section className='grid grid-cols-2 gap-4 py-12 items-center justify-center'>
        <div>
          <h1>Condition:</h1>
          <h1>{data?.current?.condition?.text}</h1>
        </div>
        <div>
          <h1>Humidity:</h1> <h1>{data?.current?.humidity}</h1>
        </div>
        <div>
          <h1>Feels like:</h1> <h1>{data?.current?.feelslike_c}°c</h1>
        </div>
        <div>
          <h1>UV:</h1>
          <h1>{data?.current?.uv}</h1>
        </div>
      </section>
      {/* <section>
        <h1>{data?.current?.cloud}</h1>
      </section> */}
    </div>
  );
};

export default Results;
