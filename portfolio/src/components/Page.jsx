import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Page = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className='grid-col-1 grid-row-5 grid items-start justify-center gap-6 overflow-hidden text-center'
      ref={ref}
    >
      <img
        src='https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        className='row-span-1 row-start-1 object-fill'
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
          filter: isInView ? 'none' : 'blur(30px)',
        }}
      />
      <h1
        className='text-3xl font-medium'
        style={{
          transform: isInView ? 'none' : 'translateX(200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
          filter: isInView ? 'none' : 'blur(5px)',
        }}
      >
        {data.projectName}
      </h1>
      <p
        className=' text-slate-50 '
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s',
          filter: isInView ? 'none' : 'blur(5px)',
        }}
      >
        {data.projectDesc}
      </p>
      {data.link ? (
        <a
          href={data.link}
          className='justify-self-center rounded-xl border border-slate-50/50 p-1 px-2  text-lg'
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s',
            filter: isInView ? 'none' : 'blur(5px)',
          }}
        >
          Live
        </a>
      ) : null}
    </div>
  );
};

export default Page;
