import { useState } from 'react';
import { MdOutlineExitToApp } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex-start relative flex h-24 w-full items-center justify-between gap-4 px-6'>
      <h1 className='justify-self-center  text-3xl uppercase'>My portfolio</h1>

      {/* MOBILE NAV */}
      <ul className='flex  p-2 text-2xl  md:hidden'>
        {isOpen ? (
          <button onClick={handleNav}>
            <MdOutlineExitToApp />
          </button>
        ) : (
          <RxHamburgerMenu onClick={handleNav} />
        )}
        {isOpen && (
          <div
            className={`${
              isOpen ? 'left-0' : '-left-[50rem]'
            } absolute left-0 top-16 z-10 flex h-[80vh] w-full flex-col items-start gap-4 rounded-lg bg-slate-800 p-6 transition-all duration-300 ease-in`}
          >
            <button>Projects</button>
            <div className='h-[1px] w-full bg-slate-200/50' />
            <button>About</button>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
