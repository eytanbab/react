import React from 'react';

const MenuItem = ({ id, name}) => {
 
  return (
    <li className='flex gap-1  px-2'>
      <span className='font-bold'>{id}</span>
      <span className='text-base uppercase'>{name}</span>
    </li>
  );
};

export default MenuItem;
