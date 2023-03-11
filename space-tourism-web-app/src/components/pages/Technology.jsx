import Tool from './Tool';
import LaunchVehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceCapsule from '../../assets/technology/image-space-capsule-portrait.jpg';
import SpacePort from '../../assets/technology/image-spaceport-portrait.jpg';
import { useState } from 'react';

function Technology({ data }) {
  const [tool, setTool] = useState(0);
  const [img, setImg] = useState(SpaceCapsule);

  return (
    <div className='page flex justify-around bg-technology-desktop'>
      <div className='flex flex-col gap-72'>
        <div className='flex gap-10 text-4xl'>
          <h1 className='font-bold text-gray-400'>03</h1>
          <h1>SPACE LAUNCH 101</h1>
        </div>
        <div className='flex'>
          <div className='flex flex-col gap-12  text-4xl text-white'>
            <button
              onClick={() => {
                setTool(0);
                setImg(LaunchVehicle);
              }}
              className='h-24 w-24 rounded-full border border-slate-600 focus:bg-white focus:text-black'
            >
              1
            </button>
            <button className='h-24 w-24 rounded-full border border-slate-600 focus:bg-white focus:text-black'>
              2
            </button>
            <button className='h-24 w-24 rounded-full border border-slate-600 focus:bg-white focus:text-black'>
              3
            </button>
          </div>
          <Tool data={data[tool]} img={img} />
        </div>
      </div>
    </div>
  );
}

export default Technology;
