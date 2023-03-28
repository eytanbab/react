import React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ setQuery }) => {
  const [tempQuery, setTempQuery] = useState('');
  const handleChange = (e) => {
    setTempQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(tempQuery);
  };

  return (
    <form
      className='flex items-center justify-between border-b border-b-electric-200/80 bg-transparent'
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className='w-full bg-transparent p-2 outline-none placeholder:text-electric-200'
        type='text'
        placeholder='Search crypto...'
        onChange={handleChange}
      />
      <button type='submit'>
        <AiOutlineSearch size={30} />
      </button>
    </form>
  );
};

export default SearchBar;
