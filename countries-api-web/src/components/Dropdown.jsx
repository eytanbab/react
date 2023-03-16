import React from 'react';
import { useState } from 'react';

const Dropdown = ({ setRegion }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setRegion('');
  };

  return (
    <div className='flex flex-col items-center justify-center gap-2 self-start rounded-md bg-red-500'>
      <button onClick={handleOpen} className='p-2'>
        Filter by Region
      </button>
      {open ? (
        <ul className='menu w-full space-y-2 px-4 pb-4'>
          <li className='menu-item'>
            <button onClick={() => setRegion('Africa')}>Africa</button>
          </li>
          <li className='menu-item'>
            <button onClick={() => setRegion('Americas')}>America</button>
          </li>
          <li className='menu-item'>
            <button onClick={() => setRegion('Asia')}>Asia</button>
          </li>
          <li className='menu-item'>
            <button onClick={() => setRegion('Europe')}>Europe</button>
          </li>
          <li className='menu-item'>
            <button onClick={() => setRegion('Oceania')}>Oceania</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
