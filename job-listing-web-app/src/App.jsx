import { useState } from 'react';
import data from './data.json';
import BgHeader from './assets/images/bg-header-mobile.svg';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='box-border flex min-h-screen flex-col overflow-x-hidden'>
      {/* HEADER */}
      <div className='relative h-40 w-screen'>
        <img
          src={BgHeader}
          alt='header'
          className='absolute right-0 top-0 left-0 w-full bg-[#5DA5A4]'
        />
      </div>

      {/* JOBS */}
      <div className='flex w-full flex-col items-center gap-8 bg-[#F0FAFB] px-4 py-16'>
        {data.map((job) => {
          return (
            <div
              key={job.id}
              className='relative my-4 h-80 w-full rounded-lg border-l-4 border-[#5DA5A4] bg-white p-4 shadow-lg'
            >
              <div
                className={`absolute -top-10 h-20 w-20 rounded-full bg-[url('${job.logo}')] bg-cover
              `}
              />

              <div className='flex items-center justify-start pt-10 '>
                <h1 className='min-w-[8rem] max-w-full text-2xl font-bold text-[#5DA5A4]'>
                  {job.company}
                </h1>
                {job.new ? (
                  <div className='mr-2 rounded-full bg-[#5DA5A4] px-3 py-2 font-bold uppercase text-white'>
                    new!
                  </div>
                ) : (
                  ''
                )}
                {job.featured ? (
                  <div className='rounded-full bg-[#2D3939] px-3 py-2 font-bold uppercase text-white'>
                    featured
                  </div>
                ) : (
                  ''
                )}
              </div>

              <h1 className='pt-2 text-xl font-bold'>{job.position}</h1>
              <ul className='flex items-center justify-start gap-6'>
                <li className='font-medium text-gray-400'>{job.postedAt}</li>
                <div className='h-[5px] w-[5px] rounded-full bg-gray-300' />
                <li className='font-medium text-gray-400'>{job.contract}</li>
                <div className='h-[5px] w-[5px] rounded-full bg-gray-300' />
                <li className='font-medium text-gray-400'>{job.location}</li>
              </ul>

              <div className='my-4 h-[2px] w-full bg-gray-300' />
              <div className='flex flex-wrap items-center justify-start gap-4'>
                <h1 className='rounded-xl bg-[#EEF6F6] p-2 font-bold text-[#5EA4A3]'>
                  {job.role}
                </h1>
                <h1 className='rounded-xl bg-[#EEF6F6] p-2 font-bold text-[#5EA4A3]'>
                  {job.level}
                </h1>
                {
                  <div className='flex flex-wrap items-center justify-start gap-4'>
                    {job.languages.map((item, index) => (
                      <h1
                        key={index}
                        className='rounded-xl bg-[#EEF6F6] p-2 font-bold text-[#5EA4A3]'
                      >
                        {item}
                      </h1>
                    ))}
                  </div>
                }
                {
                  <div className='flex flex-wrap items-center justify-start gap-4'>
                    {job.tools.map((item, index) => (
                      <h1
                        key={index}
                        className='rounded-xl bg-[#EEF6F6] p-2 font-bold text-[#5EA4A3]'
                      >
                        {item}
                      </h1>
                    ))}
                  </div>
                }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
