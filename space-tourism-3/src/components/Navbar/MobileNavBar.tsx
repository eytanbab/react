import { useState } from 'react';
import Logo from '../../assets/shared/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import MobileMenu from './MobileMenu';

const MobileNavBar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <>
      <nav className='flex w-full justify-between items-center'>
        <img src={Logo} width={32} height={32} />
        {/* NAVBAR BUTTONS */}
        <button className='z-50' onClick={() => setIsOpenNav(!isOpenNav)}>
          {!isOpenNav ? (
            <GiHamburgerMenu size={32} />
          ) : (
            <IoCloseSharp size={32} />
          )}
        </button>
      </nav>
      {/* NAVBAR MENU */}
      {isOpenNav && <MobileMenu />}
    </>
  );
};

export default MobileNavBar;
