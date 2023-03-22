import { useState } from 'react';
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiFillGithub,
} from 'react-icons/ai';
import Page from './components/Page';
import data from './data';

const Mobile = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const pageNextHandle = () => {
    if (pageIndex >= data.length) return;
    setPageIndex((prev) => prev + 1);
  };

  const pagePrevHandle = () => {
    if (pageIndex <= 1) return;
    setPageIndex((prev) => prev - 1);
  };

  return (
    <div className='flex  h-screen flex-col items-center justify-start gap-4 bg-slate-900 p-4 text-slate-100'>
      <h1 className='text-3xl uppercase '>my portfolio</h1>
      <div className='flex h-screen flex-col justify-between'>
        {data.map((data, index) =>
          index === pageIndex - 1 ? <Page key={index} data={data} /> : ''
        )}

        {/* BUTTONS AND FOOTER DIV */}
        <div>
          <div className='flex w-full items-center justify-between self-end justify-self-end '>
            <button className='p-1' onClick={pagePrevHandle}>
              <h1 className='flex flex-1 flex-row-reverse items-center gap-2 bg-gradient-to-r from-[#963D5A] to-[#E07A5F] bg-clip-text text-3xl font-medium uppercase text-transparent transition-transform duration-300 ease-linear hover:scale-105'>
                prev
                <AiFillCaretLeft className='fill-slate-50' />
              </h1>
            </button>
            <button className='p-1' onClick={pageNextHandle}>
              <h1 className='flex flex-1  items-center gap-2 bg-gradient-to-r from-[#963D5A] to-[#E07A5F] bg-clip-text text-3xl font-medium uppercase text-transparent transition-transform duration-300 ease-linear hover:scale-105'>
                next
                <AiFillCaretRight className='fill-slate-50' />
              </h1>
            </button>
          </div>

          <div className=' flex w-full justify-center  bg-slate-900 p-4'>
            <a href='https://github.com/eytanbab' className='text-5xl'>
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
