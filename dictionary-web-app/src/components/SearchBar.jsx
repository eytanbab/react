import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
function SearchBar({ setWord }) {
  const submitHandler = (e) => {
    e.preventDefault();
    setWord(tempWord);
  };
  const [tempWord, setTempWord] = useState('');

  return (
    <form
      className='flex min-w-max items-center justify-between rounded-xl bg-gray-200 px-4 shadow sm:w-96'
      onSubmit={submitHandler}
    >
      <input
        className='w-full bg-transparent outline-none'
        type='text'
        placeholder='Type here...'
        onChange={(e) => setTempWord(e.target.value)}
      />
      <button
        type='submit'
        className='flex h-12 items-center justify-center'
        onClick={submitHandler}
      >
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
