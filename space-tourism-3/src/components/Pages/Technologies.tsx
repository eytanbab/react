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
      className={`${mobileBG} ${tabletBG} ${desktopBG} bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center py-6 gap-8 md:py-10`}
    >
      <div className='flex flex-col items-center h-[calc(100%-5rem)] justify-between md:h-[calc(100%-8rem)] py-6 md:p-10'>
        <p className='uppercase flex gap-6 w-full justify-center md:justify-start md:gap-6 md:text-xl'>
          <span className='text-white/25 font-bold'>03</span>Pick your
          destination
        </p>
        <div className='flex flex-col items-center gap-8 pt-10'>
          <img
            src={selectedTechnology.images.landscape}
            className='h-60 w-full md:h-auto'
          />
          <div className='flex flex-col items-center px-6 md:px-10'>
            <Pagination
              styleVariant='Technology'
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
              setSelectedTechnology={setSelectedTechnology}
            />
            <div className='flex flex-col gap-4 p-6 items-center text-center shrink-0 md:p-20'>
              <div className='flex flex-col items-center gap-4'>
                <p className='uppercase text-lg text-white/50 md:text-2xl'>
                  The terminology…
                </p>
                <p className='text-2xl uppercase md:text-5xl'>
                  {selectedTechnology.name}
                </p>
              </div>
              <p className='h-60'>{selectedTechnology.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
