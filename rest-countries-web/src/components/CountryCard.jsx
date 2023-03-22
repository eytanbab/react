import React from 'react';
import Modal from './Modal';
import { useState } from 'react';

const CountryCard = ({ country }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='relative flex flex-col gap-2 rounded-md pb-8 text-left shadow-xl dark:bg-stone-700 '>
      <img
        src={country.flags.svg}
        alt='flag'
        className='h-64 w-full rounded-t-md object-cover'
      />

      <h1 className='p-4 text-xl font-bold'>{country.name.common}</h1>
      <h1 className='p-4 font-bold'>
        Population:{' '}
        <span className='font-normal'>
          {country.population.toLocaleString()}
        </span>
      </h1>
      <h1 className='p-4 font-bold'>
        Region: <span className=' font-normal'>{country.region}</span>
      </h1>
      <h1 className='p-4 font-bold'>
        Capital: <span className=' font-normal'>{country.capital}</span>
      </h1>
      <button
        onClick={() => setOpenModal(true)}
        className='w-32 self-center rounded-md border border-stone-800 p-2 dark:border-stone-50'
      >
        Read More
      </button>
      {openModal && <Modal coutnry={country} />}
    </div>
  );
};

export default CountryCard;
