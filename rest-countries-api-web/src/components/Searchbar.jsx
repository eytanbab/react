import React from 'react';
import { BiSearch } from 'react-icons/Bi';

const Searchbar = ({ setQuery }) => {
  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='flex w-3/4 flex-col items-center justify-start gap-4 '>
      <div className='transition-color flex w-full max-w-xl items-center justify-start border-b border-b-gray-200/50 duration-300 hover:border-b-gray-200 '>
        <BiSearch size={26} />
        <input
          className='placeholder: bg-transparent p-2 px-4 text-sm text-white outline-none'
          placeholder='Search for a country...'
          type='text'
          onChange={queryHandler}
        />
      </div>
    </div>
  );
};

export default Searchbar;
