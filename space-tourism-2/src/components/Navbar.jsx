import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconClose from '../assets/shared/icon-close.svg';
import IconHamburger from '../assets/shared/icon-hamburger.svg';
import Logo from '../assets/shared/logo.svg';
import MenuItems from './MenuItems';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative flex h-24 w-full items-center justify-between px-6 lg:mt-12'>
      {/* LOGO */}
      <Link to='/'>
        <button className='w-12 p-2 lg:w-32'>
          <img src={Logo} />
        </button>
      </Link>

      {/* MENU MOBILE*/}
      <div className='flex  lg:hidden'>
        {isOpen ? (
          <button className='z-20 w-12 p-2' onClick={() => setIsOpen(!isOpen)}>
            <img src={IconClose} alt='' />
          </button>
        ) : (
          <button className='z-20 w-12 p-2' onClick={() => setIsOpen(!isOpen)}>
            <img src={IconHamburger} alt='' />
          </button>
        )}

        <MenuItems isOpen={isOpen} />
      </div>

      {/* MENU DESKTOP */}
      <ul className='hidden h-24  w-full items-center justify-evenly bg-white/30 pl-12 lg:flex'>
        <NavLink
          to='/'
          style={({ isActive, isPending }) => {
            return {
              borderBottomColor: isActive ? 'white' : '',
              borderBottomWidth: isActive ? 2 : '',
            };
          }}
        >
          <li className='flex gap-1 p-2'>
            <span className='font-bold'>00</span>
            <span className='uppercase'>HOME</span>
          </li>
        </NavLink>

        <NavLink
          to='/destination'
          style={({ isActive, isPending }) => {
            return {
              borderBottomColor: isActive ? 'white' : '',
              borderBottomWidth: isActive ? 2 : '',
            };
          }}
        >
          <li className='flex gap-1 p-2'>
            <span className='font-bold'>01</span>
            <span className='uppercase'>Destionation</span>
          </li>
        </NavLink>

        <NavLink
          to='/crew'
          style={({ isActive, isPending }) => {
            return {
              borderBottomColor: isActive ? 'white' : '',
              borderBottomWidth: isActive ? 2 : '',
            };
          }}
        >
          <li className='flex gap-1 p-2'>
            <span className='font-bold'>02</span>
            <span className='uppercase'>Crew</span>
          </li>
        </NavLink>

        <NavLink
          to='/technology'
          style={({ isActive, isPending }) => {
            return {
              borderBottomColor: isActive ? 'white' : '',
              borderBottomWidth: isActive ? 2 : '',
            };
          }}
        >
          <li className='flex gap-1 p-2'>
            <span className='font-bold'>03</span>
            <span className='uppercase'>Technology</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
