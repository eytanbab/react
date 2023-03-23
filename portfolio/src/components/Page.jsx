import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiFillGithub,
} from 'react-icons/ai';
import '../App.css';

const Page = ({
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
      className='grid-col-1 grid-row-5 grid h-full items-start justify-center gap-6 overflow-hidden text-center lg:h-auto lg:grid-cols-3'
      ref={ref}
    >
      <img
        src='https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        className='row-span-1 row-start-1 object-fill lg:col-span-2 lg:row-span-5'
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
          filter: isInView ? 'none' : 'blur(30px)',
        }}
      />

      {/* TITLE */}
      <h1
        className='text-3xl font-medium lg:col-start-3 lg:row-start-1 lg:text-6xl'
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
      <p
        className='text-slate-50 lg:col-start-3 lg:row-start-2 lg:text-2xl'
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
        className='flex flex-col items-center gap-1 lg:gap-4'
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s',
          filter: isInView ? 'none' : 'blur(5px)',
        }}
      >
        {data.link ? (
          <a
            className='button one relative justify-self-center px-2 lg:text-xl lg:px-4'
            href={data.link}
          >
            Live
          </a>
        ) : (
          <p className='italic text-slate-400'>In progress...</p>
        )}
        <a
          className='button two relative justify-self-center py-1 px-4 text-sm lg:text-xl'
          href={data.repo}
        >
          Github repository
        </a>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className='flex w-full items-center justify-between self-end justify-self-end lg:col-start-3 lg:row-start-5'>
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

export default Page;
