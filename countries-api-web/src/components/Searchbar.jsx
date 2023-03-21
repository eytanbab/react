import React from 'react';
import { GoSearch } from 'react-icons/go';
export const Searchbar = ({ darkMode, setQuery }) => {
  return (
    <div
      className={`${
        darkMode ? ' border-b-gray-300/20' : 'border-b-gray-800/50'
      } mt-36 flex w-80 items-center justify-between  border-b p-2 transition-all duration-500 sm:w-96`}
    >
      <input
        className=' rounded-md bg-transparent px-4 outline-none'
        placeholder='Search here'
        onChange={(e) => setQuery(e.target.value)}
      />
      <GoSearch size={20} />
    </div>
  );
};
