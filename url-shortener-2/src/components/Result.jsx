import { useState } from 'react';

const Result = ({ result, index }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = async (text) => {
    if ('clipboard' in navigator) {
      setIsCopied(true);
      return await navigator.clipboard.writeText(text);
    } else {
      setIsCopied(false);
      return document.execCommand('copy', true, text);
    }
  };

  const handleCopy = () => {
    copyTextToClipboard(result.shorten_url);
  };

  return (
    <div className='mx-6 mb-6 flex w-full max-w-sm flex-col items-center gap-2 truncate rounded-lg bg-white p-4 md:max-w-xl'>
      <div className='flex w-full flex-col items-start justify-items-stretch divide-y-2 rounded-md  text-left font-medium'>
        <h1 className='w-full truncate text-ellipsis pb-1'>{result.url}</h1>
        <h1 className='w-full truncate text-ellipsis pt-1 text-[#2BD1D1]'>
          {result.shorten_url}
        </h1>
      </div>
      <button
        onClick={handleCopy}
        className={`${
          isCopied ? 'bg-[#3A3055]' : 'bg-[#2BD1D1]'
        } w-full rounded-lg p-2 font-bold text-white`}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default Result;
