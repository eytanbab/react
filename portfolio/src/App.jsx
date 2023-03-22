import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=' h-screen w-screen bg-slate-900 p-4 text-slate-50'>
      <div className='grid  w-full auto-rows-fr  grid-cols-3 place-items-center content-start items-start '>
        {/* TITLE */}
        <h1 className='col-span-4 flex h-full w-full  items-center self-center border  px-12 text-7xl font-bold'>
          My Portfolio
        </h1>
        {/* PROJECTS PREVIEW */}
        <div className='col-span-2 row-span-2 h-full w-full place-self-start border'>
          <img
            src='https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
            className='object-cover '
          />
        </div>
        {/* DESCRIPTION */}
        <div className='row-span-2 grid h-full grid-cols-2 gap-2 border p-4'>
          <h1 className='col-span-2 text-3xl font-bold'>Project Name:</h1>
          <p className='col-span-2 row-span-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            similique consequatur magni perspiciatis rerum. Nam est ut impedit
            vero ea magnam, voluptatum nostrum ad repellat sed consequatur quo
            nisi quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos similique consequatur magni perspiciatis rerum. Nam est
            ut impedit vero ea magnam, voluptatum nostrum ad repellat sed
            consequatur quo nisi quod. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos similique consequatur magni
            perspiciatis rerum. Nam est ut impedit vero ea magnam, voluptatum
            nostrum ad repellat sed consequatur quo nisi quod.
          </p>
          {/* ARROWS */}
          <h1 className='flex items-center justify-center bg-red-500'>
            Arrow left
          </h1>
          <h1 className='flex items-center justify-center bg-red-500'>
            Arrow right
          </h1>
        </div>

        <div className='col-span-1 border '>
          <h1></h1>
        </div>
      </div>
      {/* FOOTER */}
      <div className='fixed bottom-0 flex h-12 w-full items-center justify-center bg-red-500 p-12'>
        <h1 className='flex items-center justify-center text-7xl uppercase'>
          this is a footer
        </h1>
      </div>
    </div>
  );
}

export default App;
