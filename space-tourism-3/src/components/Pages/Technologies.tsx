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
      className={`${mobileBG} ${tabletBG} ${desktopBG} bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center gap-8 `}
    >
      <div className='flex flex-col items-center h-[calc(100%-8rem)] justify-between gap-8'>
        <p className='uppercase flex gap-2'>
          <span>03</span>Space launch 101
        </p>
        <img src={selectedTechnology.images.landscape} className='h-60' />
        <Pagination
          styleVariant='Technology'
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          setSelectedTechnology={setSelectedTechnology}
        />
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
