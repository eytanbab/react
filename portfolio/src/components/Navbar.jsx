import { useState } from 'react';
import { MdOutlineExitToApp } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = ({ setFocus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleProjects = () => {
    setIsOpen(false);
    setFocus('projects');
  };

  const handleAbout = () => {
    setIsOpen(false);
    setFocus('about');
  };

  return (
    <nav className='flex-start relative flex h-24 w-full items-center justify-between gap-4 px-6'>
      <button onClick={handleProjects} className='z-20 text-3xl uppercase'>
        My portfolio
      </button>

      {/* DESKTOP NAV */}
      <button
        onClick={handleAbout}
        className='hidden text-2xl text-slate-300 xl:flex'
      >
        About
      </button>

      {/* MOBILE NAV */}
      <ul className='flex p-2 text-2xl xl:hidden'>
        {isOpen ? (
          <MdOutlineExitToApp onClick={handleNav} className='z-20' />
        ) : (
          <RxHamburgerMenu onClick={handleNav} />
        )}

        <div
          className={`${
            isOpen ? 'left-0' : '-left-[100%]'
          } absolute  top-0 z-10 flex h-[90vh] w-full flex-col items-start gap-4 overflow-hidden rounded-lg bg-slate-900/90 p-6 pt-24 backdrop-blur-md transition-all duration-300 ease-in`}
        >
          <button onClick={handleProjects}>Projects</button>
          <div className='h-[1px] w-full bg-slate-200/50' />
          <button onClick={handleAbout}>About</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
