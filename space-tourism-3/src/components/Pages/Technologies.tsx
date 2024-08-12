import { useState } from 'react';
import { technology } from '../../data.json';

const Technologies = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <div className='bg-[url("./assets/technology/background-technology-mobile.jpg")] bg-cover bg-no-repeat flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center h-[calc(100%-8rem)] justify-between gap-8'>
        <p className='uppercase flex gap-2'>
          <span>03</span>Space launch 101
        </p>
        <img src={selectedTechnology.images.landscape} className='h-60' />
        <div className='flex gap-8 text-3xl'>
          <button
            className={`${
              selectedButton === 0 ? 'bg-white text-black' : ''
            } border p-2 rounded-full size-10 text-lg flex items-center justify-center`}
            onClick={() => (
              setSelectedTechnology(technology[0]), setSelectedButton(0)
            )}
          >
            1
          </button>
          <button
            className={`${
              selectedButton === 1 ? 'bg-white text-black' : ''
            } border p-2 rounded-full size-10 text-lg flex items-center justify-center`}
            onClick={() => (
              setSelectedTechnology(technology[1]), setSelectedButton(1)
            )}
          >
            2
          </button>
          <button
            className={`${
              selectedButton === 2 ? 'bg-white text-black' : ''
            } border p-2 rounded-full size-10 text-lg flex items-center justify-center`}
            onClick={() => (
              setSelectedTechnology(technology[2]), setSelectedButton(2)
            )}
          >
            3
          </button>
        </div>
        <div className='flex flex-col gap-2 p-6 items-center text-center shrink-0'>
          <p className='uppercase'>The terminology…</p>
          <p className='text-3xl'>{selectedTechnology.name}</p>
          <p className='h-60'>{selectedTechnology.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
