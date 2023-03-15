import React from 'react';
import { BiSearch } from 'react-icons/Bi';
import Dropdown from './Dropdown';

const Searchbar = ({ setRegion }) => {
  return (
    <div className='flex flex-col gap-4 justify-start items-center w-3/4 '>
      <div className='flex w-full max-w-xl  justify-start items-center border-b border-b-gray-200/50 hover:border-b-gray-200 transition-color duration-300 '>
        <BiSearch size={26} />
        <input
          className='p-2 px-4 outline-none text-white bg-transparent placeholder: text-sm'
          placeholder='Search for a country...'
          type='text'
        />
      </div>
      <Dropdown setRegion={setRegion} />
    </div>
  );
};

export default Searchbar;
