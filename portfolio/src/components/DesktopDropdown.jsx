import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const DesktopDropdown = ({projectsDropdown, setProjectsDropdown}) => {
  return (
    <button
      onClick={() => setProjectsDropdown(!projectsDropdown)}
      className='flex items-center gap-2 transition-transform duration-300 hover:scale-110'
    >
      <h1 className='font-medium'>Projects</h1>
      <AiOutlineArrowLeft
        className={`${
          projectsDropdown ? '-rotate-90' : 'rotate-0'
        } opacity-75 transition-transform duration-150 ease-in-out`}
        size={20}
      />
    </button>
  );
};

export default DesktopDropdown;
