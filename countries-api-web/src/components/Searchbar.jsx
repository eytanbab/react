import React from 'react';
import { GoSearch } from 'react-icons/go';
export const Searchbar = ({ setQuery }) => {
  return (
    <div className=' flex items-center border-b border-b-gray-300/20 p-2 transition-all duration-500 '>
      <input
        className=' rounded-md bg-transparent px-4 outline-none'
        placeholder='Search here'
        onChange={(e) => setQuery(e.target.value)}
      />
      <GoSearch size={20} />
    </div>
  );
};
