import React from 'react';
import Image from './Image';

const CountryCard = ({ country }) => {
  const source = country.flags.svg;
  return (
    <div className='flex w-full flex-col items-center rounded-lg bg-slate-800/20'>
      <Image src={source} alt={country.flags.alt} />
      <div className='my-6 flex flex-col items-start self-start px-4'>
        <div className='py-2'>
          <h1 className='text-3xl'>{country.name.common}</h1>
        </div>
        <div className='flex gap-2'>
          <h1 className=' font-semibold'>Population:</h1>
          <p>{country.population}</p>
        </div>
        <div className='flex gap-2'>
          <h1 className='font-semibold'>Region:</h1>
          <p>{country.region}</p>
        </div>
        <div className='flex gap-2'>
          <h1 className='font-semibold'>Capital:</h1>
          <p>{country.capital}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
