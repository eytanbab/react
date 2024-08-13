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
      className={`${mobileBG} ${tabletBG} ${desktopBG} bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center p-6 gap-8`}
    >
      <div className='flex flex-col items-center h-[calc(100%-5rem)] justify-between'>
        <p className='uppercase flex gap-2'>
          <span>01</span>Pick your destination
        </p>
        <img src={selectedDestination.images.webp} alt='' className='size-40' />
        <ul className='uppercase flex gap-8 items-center'>
          {destinations.map((destination, idx) => {
            return (
              <li
                key={destination.name}
                onClick={() => {
                  setSelectedDestination(() => destinations[idx]);
                }}
                className={`${
                  selectedDestination.name === destination.name
                    ? 'underline'
                    : ''
                } hover:cursor-pointer`}
              >
                {destination.name}
              </li>
            );
          })}
        </ul>
        <section id='content' className='flex flex-col text-center gap-8'>
          <h1 className='uppercase text-4xl'>{selectedDestination.name}</h1>
          <p className='h-32'>{selectedDestination.description}</p>

          <Divider />
          <section className='text-center flex flex-col gap-8'>
            <div>
              <p className='uppercase'>Avg. distance</p>
              <p className='text-xl'>{selectedDestination.distance}</p>
            </div>
            <div>
              <p className='uppercase'>EST. travel time</p>
              <p className='text-xl'>{selectedDestination.travel}</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Destination;
