import React from 'react';
import Box from './Box';
import BrandRecognition from '../assets/images/icon-brand-recognition.svg';
import DetailedRecords from '../assets/images/icon-detailed-records.svg';
import FullyCustomizable from '../assets/images/icon-fully-customizable.svg';

const info = [
  {
    title: 'Brand Recognition',
    desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    title: 'Detailed Records',
    desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    title: 'Fully Customizable',
    desc: 'Improve brand awareness and content discoverablity through customizable links, supercharging audience engagement.',
  },
];

const Info = () => {
  return (
    <div className='relative flex flex-col gap-4 overflow-x-hidden bg-[#F0F1F6] p-2 py-12 text-center'>
      <h1 className='text-2xl font-bold text-gray-800'>Advanced Statistics</h1>
      <p className='mx-6 font-medium text-gray-400'>
        Track how your links are performing across the web wth our advanced
        statistics dashboard.
      </p>

      <div className=' relative flex flex-col gap-24 pt-12'>
        <div className='absolute left-[49%] h-[40rem] w-2  bg-[#2BD1D1]' />
        <Box
          Icon={BrandRecognition}
          title={info[0].title}
          desc={info[0].desc}
        />
        <Box Icon={DetailedRecords} title={info[1].title} desc={info[1].desc} />
        <Box
          Icon={FullyCustomizable}
          title={info[2].title}
          desc={info[2].desc}
        />
      </div>
    </div>
  );
};

export default Info;
