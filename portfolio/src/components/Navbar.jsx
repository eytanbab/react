import { useState } from 'react';
import { MdOutlineExitToApp } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import data from '../data.js';
import MobileDropdown from './MobileDropdown.jsx';
import DesktopDropdown from './DesktopDropdown.jsx';
import AboutButton from './AboutButton.jsx';

const Navbar = ({ setFocus, setPageIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleProjects = () => {
    setIsOpen(false);
    setFocus('projects');
  };

  const handleProject = (index) => {
    setIsOpen(false);
    setPageIndex(index + 1);
    setFocus('projects');
    setProjectsDropdown(false);
  };

  const handleAbout = () => {
    setIsOpen(false);
    setFocus('about');
  };

  return (
    <nav className='flex h-24 w-full items-center  justify-between gap-4 px-6'>
      <button onClick={handleProjects} className='z-20 text-3xl uppercase'>
        My portfolio
      </button>

      {/* DESKTOP NAV */}
      <div className='relative hidden gap-20 text-2xl text-slate-300 xl:flex'>
        <DesktopDropdown
          data={data}
          projectsDropdown={projectsDropdown}
          setProjectsDropdown={setProjectsDropdown}
          handleProject={handleProject}
        />
        {/*DESKTOP PROJECTS DROPDOWN OPTIONS */}

        <AboutButton handleAbout={handleAbout} />
      </div>

      {/* MOBILE NAV */}
      <div className='flex p-2 text-2xl xl:hidden'>
        {isOpen ? (
          <MdOutlineExitToApp onClick={handleNav} className='z-20' />
        ) : (
          <RxHamburgerMenu onClick={handleNav} />
        )}

        <div
          className={`${
            isOpen ? 'left-0' : '-left-[100%]'
          } absolute  top-0 z-10 flex h-full w-full flex-col items-start gap-4 overflow-hidden rounded-lg bg-slate-900/90 p-6 pt-24 backdrop-blur-md transition-all duration-300 ease-in`}
        >
          {/* MOBILE PROJECTS DROPDOWN MENU */}
          <MobileDropdown
            data={data}
            projectsDropdown={projectsDropdown}
            setProjectsDropdown={setProjectsDropdown}
            handleProject={handleProject}
          />
          {/* DIVIDER */}
          <div className='h-[1px] w-full bg-slate-200/40' />
          <AboutButton handleAbout={handleAbout} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
