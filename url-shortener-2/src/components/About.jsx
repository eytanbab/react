import React from 'react';
import FacebookIcon from '../assets/images/icon-facebook.svg';
import TwitterIcon from '../assets/images/icon-twitter.svg';
import PinterestIcon from '../assets/images/icon-pinterest.svg';
import InstagramIcon from '../assets/images/icon-instagram.svg';

const About = () => {
  return (
    <div className='flex flex-col items-center gap-16 bg-[#232027] py-10 px-6 text-white'>
      <h1 className='text-4xl font-bold'>Shortly</h1>
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-medium'>Features</h1>
        <ul className='space-y-2 pt-2 text-gray-400'>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-medium'>Resources</h1>
        <ul className='space-y-2 pt-4 text-gray-400'>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-medium'>Company</h1>
        <ul className='space-y-2 pt-4 text-gray-400'>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='flex items-center gap-6'>
        <img src={FacebookIcon} alt='fb' />
        <img src={TwitterIcon} alt='tw' />
        <img src={PinterestIcon} alt='pi' />
        <img src={InstagramIcon} alt='ig' />
      </div>
    </div>
  );
};

export default About;
