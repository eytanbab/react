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

  const handleInput = (e) => {
    e.preventDefault();
    if (newUrl) {
      if (!props.error) {
        props.setError(false);
        props.dataFetchedRef.current = false;
        props.setUrl(newUrl);
      }
    } else {
      props.setError(true);
    }
  };

  return (
    <div
      ref={props.inputRef}
      className='relative m-6 box-border flex  w-3/4 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-[#3A3055] p-6 text-center md:flex-row'
    >
      <img
        src={BgBoost}
        alt='illustration'
        className='absolute top-0  z-20 bg-repeat md:right-0'
      />
      <form
        onSubmit={(e) => handleInput(e)}
        className='z-50 flex h-full w-full flex-col items-center justify-center gap-2 md:flex-row'
      >
        <input
          placeholder='Shorten a link here..'
          className={`${
            props.error
              ? 'border-2 border-red-500 placeholder:text-red-500'
              : ''
          } z-20 box-border w-full rounded-xl p-3 outline-none`}
          onChange={(e) => {
            props.setError(false);
            setNewUrl(e.target.value);
          }}
        />
        {props.error ? (
          <div className='z-20  self-start text-xs italic text-red-500 md:absolute md:bottom-1 md:left-6'>
            Please add a link
          </div>
        ) : (
          ''
        )}

        <input
          type='submit'
          value='Shorten it'
          className='z-20 h-full w-full rounded-lg bg-[#2BD1D1] p-3 md:w-1/4'
        />
      </form>
    </div>
  );
};

export default Input;
