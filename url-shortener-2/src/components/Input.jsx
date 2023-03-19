import React from 'react';
import Results from './Results';
import { useState } from 'react';

const Input = (props) => {
  // results, setResults, inputRef
  const [newUrl, setNewUrl] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    props.setUrl(newUrl);
    props.setResults([
      ...props.results,
      { url: newUrl, shortenUrl: props.shortenUrl },
    ]);
  };

  return (
    <div
      ref={props.inputRef}
      className='m-6 flex  flex-col items-center justify-center gap-4 rounded-lg bg-[#3A3055] p-6 text-center'
    >
      <input
        placeholder='Shorten a link here..'
        className=' w-full rounded-xl p-3'
        onChange={(e) => setNewUrl(e.target.value)}
      />
      <button
        onClick={(e) => handleInput(e)}
        className='w-full rounded-lg bg-[#2BD1D1] p-3'
      >
        Shorten it
      </button>
    </div>
  );
};

export default Input;
