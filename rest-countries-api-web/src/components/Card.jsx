import React from 'react';

const Card = ({ country }) => {
  return (
    <div className='flex border border-black p-2'>{country.name.common}</div>
  );
};

export default Card;
