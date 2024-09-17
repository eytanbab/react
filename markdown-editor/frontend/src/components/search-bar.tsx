import React from 'react';

const SearchBar = () => {
  return (
    <input
      placeholder='Search saved markdowns...'
      className='rounded-full px-4 py-1 w-full min-w-0 max-w-80 outline-none bg-slate-50 dark:bg-slate-800 drop-shadow-md placeholder:text-slate-400'
    />
  );
};

export default SearchBar;
