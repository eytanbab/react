import Divider from '../shared/Divider';
import { destinations } from '../../data.json';
import { useState } from 'react';

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );
  const mobileBG =
    'bg-[url("./assets/destination/background-destination-mobile.jpg")]';
  const tabletBG =
    'md:bg-[url("./assets/destination/background-destination-tablet.jpg")]';
  const desktopBG =
    'lg:bg-[url("./assets/destination/background-destination-desktop.jpg")]';
  return (
    <div
      className={`${mobileBG} ${tabletBG} ${desktopBG} bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center p-6 gap-8 md:p-10`}
    >
      <div className='flex flex-col items-center h-[calc(100%-5rem)] justify-between md:h-[calc(100%-8rem)] p-6 md:p-10 gap-6'>
        <p className='uppercase flex gap-6 w-full justify-center md:justify-start md:gap-6 md:text-xl'>
          <span className='text-white/25 font-bold'>01</span>Pick your
          destination
        </p>
        <div className=' flex flex-col items-center gap-8'>
          <img
            src={selectedDestination.images.webp}
            alt={selectedDestination.name}
            className='size-40 md:size-72'
          />
          <div className='flex flex-col items-center gap-10'>
            {/* DESTINATION NAVBAR */}
            <ul className='uppercase flex justify-around w-full'>
              {destinations.map((destination, idx) => {
                return (
                  <li
                    key={destination.name}
                    onClick={() => {
                      setSelectedDestination(() => destinations[idx]);
                    }}
                    className={`${
                      selectedDestination.name === destination.name
                        ? 'border-b-4'
                        : ''
                    } hover:cursor-pointer h-8`}
                  >
                    {destination.name}
                  </li>
                );
              })}
            </ul>
            {/* TEXT SECTION */}
            <section id='content' className='flex flex-col text-center gap-6'>
              <div className=' flex flex-col gap-4 items-center'>
                <h1 className='uppercase text-4xl md:text-7xl'>
                  {selectedDestination.name}
                </h1>
                <p className='h-40 w-full md:px-24'>
                  {selectedDestination.description}
                </p>
              </div>
              <Divider />
              {/* STATISTICS SECTION */}
              <section className='text-center flex flex-col gap-6 md:flex-row md:justify-around'>
                <div className='flex flex-col items-center gap-3'>
                  <p className='uppercase text-sm'>Avg. distance</p>
                  <p className='text-xl md:text-3xl uppercase'>
                    {selectedDestination.distance}
                  </p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <p className='uppercase text-sm'>EST. travel time</p>
                  <p className='text-xl md:text-3xl uppercase'>
                    {selectedDestination.travel}
                  </p>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
