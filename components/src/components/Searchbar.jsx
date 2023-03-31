import React from 'react';

const Searchbar = () => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search here...'
        className='rounded-lg bg-gray-300 px-4 py-2 text-gray-800 outline-none placeholder:text-gray-700'
      />
    </div>
  );
};

export default Searchbar;
