import React from 'react';
import Results from './Results';
import { useState } from 'react';
import BgBoost from '../assets/images/bg-boost-mobile.svg';

const Input = (props) => {
  // PROPS
  // inputRef={props.inputRef}
  // results={results}
  // setResults={setResults}
  // shortenUrl={shortenUrl}
  // setUrl={setUrl}
  // error={error}

  const [newUrl, setNewUrl] = useState('');

  const handleInput = () => {
    if (!props.error || newUrl !== '') {
      props.dataFetchedRef.current = false;
      props.setUrl(newUrl);
    }
  };

  return (
    <div
      ref={props.inputRef}
      className='relative m-6  flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-[#3A3055] p-6 text-center'
    >
      <img
        src={BgBoost}
        alt='illustration'
        className='absolute top-0 left-12 z-20 '
      />

      <input
        placeholder='Shorten a link here..'
        className={`${
          props.error ? 'border-2 border-red-500 placeholder:text-red-500' : ''
        } z-20 w-full rounded-xl p-3 outline-none`}
        onChange={(e) => setNewUrl(e)}
      />
      {props.error ? (
        <span className='z-20 -mt-2 self-start text-xs italic text-red-500'>
          Please add a link
        </span>
      ) : (
        ''
      )}
      <button
        onClick={handleInput}
        className='z-20 w-full rounded-lg bg-[#2BD1D1] p-3'
      >
        Shorten it
      </button>
    </div>
  );
};

export default Input;
