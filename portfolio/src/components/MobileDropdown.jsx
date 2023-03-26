import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MobileDropdown = ({
  data,
  projectsDropdown,
  setProjectsDropdown,
  handleSelectedProject,
}) => {
  return (
    <>
      {/* MOBILE PROJECTS DROPDOWN MENU */}
      <button
        onClick={() => setProjectsDropdown((prev) => !prev)}
        className='flex items-center gap-4'
      >
        <h1 className='font-medium'>Projects</h1>
        <AiOutlineArrowLeft
          size={22}
          className={`${
            projectsDropdown ? '-rotate-90' : 'rotate-0'
          } opacity-75 transition-transform duration-150 ease-in-out`}
        />
      </button>
      {/* MOBILE PROJECTS DROPDOWN OPTIONS */}
      {projectsDropdown ? (
        <div className='flex flex-col items-start gap-2'>
          {data.map((project, index) => (
            <button
              key={project.projectId}
              onClick={() => handleSelectedProject(index)}
              className='text-lg text-slate-300'
            >
              {project.projectName}
            </button>
          ))}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default MobileDropdown;
