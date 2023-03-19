import React from 'react';
import Results from './Results';
import { useState } from 'react';

const Input = (props) => {
  // PROPS
  // inputRef={props.inputRef}
  // results={results}
  // setResults={setResults}
  // shortenUrl={shortenUrl}
  // setUrl={setUrl}

  const [newUrl, setNewUrl] = useState('');

  const handleInput = () => {
    if (newUrl) {
      props.dataFetchedRef.current = false;
      props.setUrl(newUrl);
    }
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
        onClick={handleInput}
        className='w-full rounded-lg bg-[#2BD1D1] p-3'
      >
        Shorten it
      </button>
    </div>
  );
};

export default Input;
