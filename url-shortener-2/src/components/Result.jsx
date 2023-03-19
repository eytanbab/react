import React from 'react';
import { useState } from 'react';

const Result = ({ result, index }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
  };

  return (
    <div className='mx-6 mb-6 flex flex-col gap-2 rounded-lg bg-white p-4'>
      <div className='flex w-full flex-col items-start justify-items-stretch divide-y-2 rounded-md text-left font-medium'>
        <h1 className='w-full '>{result.url}</h1>
        <a href={result.shortenUrl} className='w-full text-[#2BD1D1]'>
          {result.shortenUrl}
        </a>
      </div>
      <button
        onClick={handleCopy}
        className={`${
          isCopied ? 'bg-[#3A3055]' : 'bg-[#2BD1D1]'
        } w-full rounded-lg  p-2 font-bold text-white`}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default Result;
