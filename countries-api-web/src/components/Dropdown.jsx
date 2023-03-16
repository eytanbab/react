import React from 'react';
import { useState } from 'react';

const Dropdown = ({ darkMode, setRegion }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${
        darkMode ? ' bg-gray-800' : 'bg-gray-300'
      } flex flex-col items-center justify-center gap-2  self-start  rounded-md`}
    >
      <button onClick={handleOpen} className='p-3'>
        Filter by Region
      </button>
      {open ? (
        <ul className='w-full space-y-2 px-4 pb-4'>
          <li className=''>
            <button onClick={() => setRegion('')}>Show All</button>
          </li>

          <li className=''>
            <button onClick={() => setRegion('Africa')}>Africa</button>
          </li>

          <li className=''>
            <button onClick={() => setRegion('Americas')}>America</button>
          </li>
          <li className=''>
            <button onClick={() => setRegion('Asia')}>Asia</button>
          </li>
          <li className=''>
            <button onClick={() => setRegion('Europe')}>Europe</button>
          </li>
          <li className=''>
            <button onClick={() => setRegion('Oceania')}>Oceania</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
