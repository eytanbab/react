import React from 'react';
import { BsToggle2On } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='flex w-full justify-between items-center '>
      <h1 className='font-bold'>WHERE IN THE WORLD?</h1>
      <BsToggle2On size={30} />
    </div>
  );
};

export default Header;
