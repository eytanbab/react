import { useState } from 'react';
import { technology } from '../../data.json';
import Pagination from '../shared/Pagination';

const Technologies = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);
  const [selectedButton, setSelectedButton] = useState(0);
  const mobileBG =
    'bg-[url("./assets/technology/background-technology-mobile.jpg")]';
  const tabletBG =
    'md:bg-[url("./assets/technology/background-technology-tablet.jpg")]';
  const desktopBG =
    'lg:bg-[url("./assets/technology/background-technology-desktop.jpg")]';
  return (
    <div
      className={`${mobileBG} ${tabletBG} ${desktopBG} bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center p-6 gap-8 md:p-10`}
    >
      <div className='flex flex-col items-center h-[calc(100%-5rem)] justify-between md:h-[calc(100%-8rem)] p-6 md:p-10'>
        <p className='uppercase flex gap-2 w-full justify-center md:justify-start md:gap-6 md:text-xl'>
          <span className='text-white/25 font-bold'>03</span>Pick your
          destination
        </p>
        <img
          src={selectedTechnology.images.landscape}
          className='h-auto md:w-full md:h-auto'
        />
        <Pagination
          styleVariant='Technology'
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          setSelectedTechnology={setSelectedTechnology}
        />
        <div className='flex flex-col gap-2 p-6 items-center text-center shrink-0 md:gap-4 md:p-20'>
          <p className='uppercase md:text-2xl'>The terminology…</p>
          <p className='text-3xl uppercase md:text-5xl'>
            {selectedTechnology.name}
          </p>
          <p className='h-60'>{selectedTechnology.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
