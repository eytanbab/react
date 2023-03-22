import { useState } from 'react';
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiFillGithub,
} from 'react-icons/ai';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=' min-h-screen bg-slate-900 text-slate-50'>
      <div className='grid h-screen grid-cols-6 grid-rows-6 place-items-start content-start items-start p-12'>
        {/* TITLE */}
        <h1 className='col-span-full flex w-full items-center self-center font-["Quicksand"] text-6xl font-bold'>
          My Portfolio
        </h1>
        {/* PROJECTS PREVIEW IMG*/}
        <div className='col-span-4  row-span-4 h-full w-full  bg-[url("https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")] bg-cover bg-no-repeat'></div>

        {/* DESCRIPTION */}

        <h1 className='col-span-full col-start-5  row-start-2 self-center px-6 text-5xl font-bold uppercase'>
          Project Name
        </h1>
        <p className='col-span-2 col-start-5 row-start-3 row-end-5 self-center text-ellipsis	 px-6 text-left text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          similique consequatur magni perspiciatis rerum. Nam est ut impedit
          vero ea magnam, voluptatum nostrum ad repellat sed consequatur quo
          nisi quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos similique consequatur magni perspiciatis rerum. Nam est ut
          impedit vero ea magnam, voluptatum nostrum ad repellat sed consequatur
          quo nisi quod. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dignissimos similique consequatur magni perspiciatis rerum. Nam
          est ut impedit vero ea magnam, voluptatum nostrum ad repellat sed
          consequatur quo nisi quod. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Consequuntur suscipit accusantium eum fugiat
          doloribus, nulla aliquid? Quae eius est iusto labore, dicta dolorum
          temporibus minima unde molestias cumque magnam rerum!
        </p>
        {/* ARROWS */}

        <button className='col-start-5 row-start-5 flex  items-center justify-start self-center justify-self-center text-slate-50 opacity-75 transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-100'>
          <AiFillCaretLeft className='text-slate-50' size={70} />
          <h1 className='flex h-full w-full items-center justify-center bg-gradient-to-r from-pink-300 to-purple-500  bg-clip-text text-3xl text-transparent  hover:from-purple-500 hover:to-pink-300'>
            Previous
          </h1>
        </button>

        <button className='col-start-6 row-start-5 flex  items-center justify-start self-center justify-self-center text-slate-50 opacity-75 transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-100'>
          <h1 className='flex h-full w-full items-center justify-center bg-gradient-to-r from-pink-300 to-purple-500  bg-clip-text text-3xl text-transparent  hover:from-purple-500 hover:to-pink-300'>
            Next
          </h1>
          <AiFillCaretRight className='text-slate-50' size={70} />
        </button>

        {/* FOOTER */}
        <div className='fixed bottom-0 left-0 flex w-full items-center justify-center p-12'>
          <h1 className=' flex items-center justify-center text-7xl uppercase'>
            <a href='https://github.com/eytanbab'>
              <AiFillGithub size={40} />
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
