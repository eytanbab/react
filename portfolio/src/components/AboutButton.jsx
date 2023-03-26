import React from 'react';

const AboutButton = ({ handleAbout }) => {
  return (
    <button
      onClick={handleAbout}
      className='transition-transform
      duration-300
      hover:scale-110'
    >
      <h1 className='font-medium'>About</h1>
    </button>
  );
};

export default AboutButton;
