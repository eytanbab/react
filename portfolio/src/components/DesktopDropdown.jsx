import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const DesktopDropdown = ({
  projectsDropdown,
  setProjectsDropdown,
  handleSelectedProject,
  data,
}) => {
  return (
    <>
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
      {projectsDropdown && (
        <div
          className={`absolute left-0 top-0 z-30 -m-6 mt-12 flex flex-col items-start gap-3 divide-slate-200/50 rounded-md bg-slate-800/50 p-6 text-base text-slate-200 backdrop-blur-lg`}
        >
          {data.map((project, index) => (
            <button
              className='pt-4'
              key={index}
              onClick={() => handleSelectedProject(index)}
            >
              {project.projectName}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default DesktopDropdown;
