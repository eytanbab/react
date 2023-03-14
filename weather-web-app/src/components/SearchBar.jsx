import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ setLocation }) => {
  const [tempWord, setTempWord] = useState('');

  const inputHandler = (e) => {
    setTempWord(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setLocation(tempWord);
  };

  return (
    <div className='flex justify-center gap-6 items-center w-full max-w-xl'>
      <form
        className='flex justify-center gap-6 items-center w-full max-w-xl'
        onSubmit={submitHandler}
      >
        <input
          type='text'
          className=' py-2.5 px-4 w-full text-sm text-gray-400 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-[#FA7268] border-0 border-gray-300/30 border-b-[1px]'
          placeholder='Enter location...'
          required
          onChange={inputHandler}
        />
        <button>
          <BsSearch size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
