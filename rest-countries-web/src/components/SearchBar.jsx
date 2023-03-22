import React from 'react';
import { useState } from 'react';

const SearchBar = ({ setQuery, setRegion }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mt-32 flex w-full flex-col gap-4 p-2'>
      <input
        className='mx-4 border-b border-stone-800/50 bg-transparent p-3 outline-none dark:border-stone-50 dark:text-stone-50'
        placeholder='Search for a country'
        onChange={(e) => setQuery(e.target.value)}
      />

      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className='relative mx-4 self-start rounded-md bg-stone-200  p-3 shadow-md hover:cursor-pointer
        dark:bg-stone-600 dark:text-stone-50'
      >
        Filter by region
        {isOpen && (
          <ul className='absolute top-14 left-0 flex w-full flex-col items-center  gap-2 rounded-md bg-stone-200  py-2 dark:bg-stone-600'>
            <li onClick={() => setRegion('')}>Show All</li>
            <li onClick={() => setRegion('Africa')}>Africa</li>
            <li onClick={() => setRegion('Americas')}>America</li>
            <li onClick={() => setRegion('Asia')}>Asia</li>
            <li onClick={() => setRegion('Europe')}>Europe</li>
            <li onClick={() => setRegion('Oceania')}>Oceania</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
