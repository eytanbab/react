import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { RiLinkedinLine } from 'react-icons/ri';
const Footer = () => {
  return (
    <div className='flex h-24 w-full items-center justify-center gap-4 p-4 text-3xl'>
      <a href='https://github.com/eytanbab'>
        <AiFillGithub />
      </a>
      <a href='https://www.linkedin.com/in/eytan-babaev/'>
        <RiLinkedinLine />
      </a>
    </div>
  );
};

export default Footer;
