import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = () => {
  return (
    <div className='flex gap-2'>
      {[...Array(5)].map((_, index) => {
        return <FaStar size={40} />;
      })}
    </div>
  );
};

export default Rating;
