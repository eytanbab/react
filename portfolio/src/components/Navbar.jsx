import { useState } from 'react';
import { MdOutlineExitToApp } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Menu } from '@headlessui/react';
import { AiOutlineArrowDown, AiOutlineArrowLeft } from 'react-icons/ai';
import data from '../data.js';

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
  };

  const handleAbout = () => {
    setIsOpen(false);
    setFocus('about');
  };

  return (
    <nav className='flex-start flex h-24 w-full items-center justify-between gap-4 px-6'>
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
      <Menu>
        <ul className='flex p-2 text-2xl xl:hidden'>
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
            <button
              onClick={() => setProjectsDropdown(!projectsDropdown)}
              className='flex items-center gap-4'
            >
              <h1>Projects</h1>
              <AiOutlineArrowLeft
                size={22}
                className={`${
                  projectsDropdown ? '-rotate-90' : 'rotate-0'
                } opacity-75 transition-transform duration-150 ease-in-out`}
              />
            </button>
            {/* PROJECTS DROPDOWN OPTIONS */}
            {projectsDropdown ? (
              <div className='flex flex-col items-start gap-2'>
                {data.map((project, index) => (
                  <button
                    key={project.projectId}
                    onClick={() => handleProject(index)}
                    className='text-lg'
                  >
                    {project.projectName}
                  </button>
                ))}
              </div>
            ) : (
              ''
            )}
            {/* DIVIDER */}
            <div className='h-[1px] w-full bg-slate-200/40' />
            <button onClick={handleAbout}>
              <h1>About</h1>
            </button>
          </div>
        </ul>
      </Menu>
    </nav>
  );
};

export default Navbar;
