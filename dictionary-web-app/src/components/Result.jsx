import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

export default function Result({ definition }) {
  return (
    <div className=' flex max-w-lg  flex-col items-center gap-4 rounded-3xl bg-slate-800 p-2 px-6 text-white'>
      <div className=' flex w-full items-center justify-between'>
        <div className=' flex flex-col gap-2'>
          <h3 className='text-6xl font-medium'>{definition[0]?.word}</h3>
          <h4 className='text-2xl  font-light text-purple-500'>
            {definition[0]?.phonetic || definition[0]?.phonetics[1].text}
          </h4>
        </div>
        <button className='text-purple-500'>
          <AiFillPlayCircle size={50} />
        </button>
      </div>
      <div className='flex w-full flex-col gap-6 rounded-3xl py-4'>
        {definition[0]?.meanings?.map((meaning) => (
          <div key={Math.random() * 1000} className=''>
            <div className='mx-2 flex items-center gap-4'>
              <h1 className='italic'>{meaning.partOfSpeech}</h1>
              <div className=' h-px w-full bg-slate-100/30'></div>
            </div>
            <div className='w-full py-2'>
              <h1 className='text-xl text-gray-300'>Meaning:</h1>
              {meaning.definitions.map((item) => (
                <ul className='list-disc px-6 py-2 marker:text-purple-500'>
                  <li key={Math.random() * 1000} className=''>
                    {item.definition}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
