import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconClose from '../assets/shared/icon-close.svg';
import IconHamburger from '../assets/shared/icon-hamburger.svg';
import Logo from '../assets/shared/logo.svg';
import MenuItems from './MenuItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative flex h-24 w-full items-center justify-between px-6'>
      {/* LOGO */}
      <Link to='/'>
        <button className='w-12 p-2'>
          <img src={Logo} />
        </button>
      </Link>

      {/* MENU */}
      <div className='z-20'>
        {isOpen ? (
          <button className='w-12 p-2' onClick={() => setIsOpen(!isOpen)}>
            <img src={IconClose} alt='' />
          </button>
        ) : (
          <button className='w-12 p-2' onClick={() => setIsOpen(!isOpen)}>
            <img src={IconHamburger} alt='' />
          </button>
        )}
      </div>
      <MenuItems isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
