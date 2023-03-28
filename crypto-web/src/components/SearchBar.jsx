import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ setQuery }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <form className='flex items-center justify-between border-b border-b-electric-200/80 bg-transparent'>
      <input
        className='w-full bg-transparent p-2 outline-none placeholder:text-electric-200'
        type='text'
        placeholder='Search crypto...'
        onChange={handleChange}
      />
      <AiOutlineSearch size={30} />
    </form>
  );
};

export default SearchBar;
