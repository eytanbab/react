import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import '../App.css';

const ProjectPage = ({
  data,
  pagePrevHandle,
  pageNextHandle,
  nextDisabled,
  prevDisabled,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className='grid-col-1 grid h-full max-h-fit grow items-start justify-center gap-6 overflow-hidden px-6 text-center xl:h-auto xl:grow-0'
      ref={ref}
    >
      <img
        src={data.projectImageUrl}
        alt='project img'
        className='col-span-1 row-span-1 row-start-1  object-fill xl:col-span-2 xl:row-span-3'
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
          filter: isInView ? 'none' : 'blur(30px)',
        }}
      />

      {/* PROJECT INFORMATION CONTAINER */}
      <div className='grid grid-cols-1 gap-12 xl:px-12'>
        {/* TITLE */}
        <h1
          className='flex items-center justify-center text-3xl font-medium xl:col-start-1 xl:row-start-1 xl:justify-center xl:text-5xl'
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
            filter: isInView ? 'none' : 'blur(5px)',
          }}
        >
          {data.projectName}
        </h1>

        {/* DESCRIPTION */}
        <div className='flex flex-col gap-4'>
          <p
            className='text-slate-50 xl:col-start-3 xl:row-start-2 xl:px-24 xl:text-xl'
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s',
              filter: isInView ? 'none' : 'blur(5px)',
            }}
          >
            {data.projectDesc}
          </p>

          {/* LINKS BUTTONS */}
          <div
            className='flex flex-col items-center xl:gap-4'
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s',
              filter: isInView ? 'none' : 'blur(5px)',
            }}
          >
            {data.link ? (
              <a
                className='button one relative justify-self-center px-2 xl:px-4 xl:text-xl'
                href={data.link}
              >
                Live
              </a>
            ) : (
              <p className='italic text-slate-400'>In progress...</p>
            )}
            <a
              className='button two relative justify-self-center py-1 px-4 text-sm xl:text-xl'
              href={data.repo}
            >
              Github repository
            </a>
          </div>
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className='flex w-full items-center justify-between self-end justify-self-end xl:col-start-3 xl:row-start-3'>
        <button
          className='p-1'
          onClick={pagePrevHandle}
          disabled={prevDisabled}
        >
          <h1
            className={`${
              prevDisabled ? 'opacity-30' : 'opacity-100 hover:scale-105'
            } flex flex-1 flex-row-reverse items-center gap-2 bg-gradient-to-r from-[#963D5A] to-[#E07A5F] bg-clip-text text-3xl font-medium uppercase text-transparent transition-transform duration-300 ease-in-out`}
          >
            prev
            <AiFillCaretLeft className='fill-slate-50' />
          </h1>
        </button>
        <button
          className='p-1'
          onClick={pageNextHandle}
          disabled={nextDisabled}
        >
          <h1
            className={`${
              nextDisabled ? 'opacity-30' : 'opacity-100 hover:scale-105'
            } flex flex-1  items-center gap-2 bg-gradient-to-r from-[#963D5A] to-[#E07A5F] bg-clip-text text-3xl font-medium uppercase text-transparent transition-transform duration-300 ease-in-out `}
          >
            next
            <AiFillCaretRight className='fill-slate-50' />
          </h1>
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
