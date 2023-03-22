import { useState } from 'react';
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiFillGithub,
} from 'react-icons/ai';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  console.log(data);
  return (
    <div className='flex min-h-screen flex-col bg-slate-900'>
      <div className='flex flex-grow flex-col items-center justify-center gap-12 text-slate-50'>
        <div className='grid grid-cols-6 place-items-start content-start items-start justify-self-center rounded-xl bg-white/5 p-12 '>
          {/* TITLE */}
          <h1 className='col-span-full flex w-full items-center self-center pb-4 text-6xl font-bold uppercase'>
            My Portfolio
          </h1>
          {/* PROJECTS PREVIEW IMG*/}
          <img
            src='https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
            className='col-span-4  row-span-4 h-full w-full  '
          />

          {/* DESCRIPTION */}

          <h1 className='col-span-1 col-start-5  row-start-2 self-center px-6 text-5xl font-bold uppercase'>
            Project Name
          </h1>
          <p className='col-span-2 col-start-5 row-start-3 row-end-5 self-start text-ellipsis px-6 text-left text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            similique consequatur magni perspiciatis rerum. Nam est ut impedit
            vero ea magnam, voluptatum nostrum ad repellat sed consequatur quo
            nisi quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos similique consequatur magni perspiciatis rerum. Nam est
            ut impedit vero ea magnam, voluptatum nostrum ad repellat sed
            consequatur quo nisi quod. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos similique consequatur magni
            perspiciatis rerum.
          </p>
          {/* ARROWS */}

          <button className='col-start-5 row-start-5 flex  items-center justify-start self-center justify-self-start px-3 text-slate-50 opacity-100 transition-all duration-500 ease-in hover:scale-105 hover:opacity-100'>
            <AiFillCaretLeft className='text-slate-50' size={40} />
            <h1 className='flex h-full w-full items-center justify-center bg-gradient-to-r from-[#bc5090] to-[#ff6361] bg-clip-text text-3xl font-medium uppercase text-transparent'>
              Previous
            </h1>
          </button>

          <button className='col-start-6 row-start-5 flex  items-center justify-start self-center justify-self-end text-slate-50 opacity-100 transition-all duration-500 ease-in-out hover:scale-105'>
            <h1 className='flex h-full w-full items-center justify-center bg-gradient-to-r from-[#bc5090] to-[#ff6361]  bg-clip-text text-3xl font-medium  uppercase text-transparent'>
              Next
            </h1>
            <AiFillCaretRight className='text-slate-50' size={40} />
          </button>
        </div>
        {/* FOOTER */}
      </div>
      <div className='flex w-full items-center justify-center justify-self-end p-12 text-white'>
        <a href='https://github.com/eytanbab'>
          <AiFillGithub size={40} />
        </a>
      </div>
    </div>
  );
}

export default App;
