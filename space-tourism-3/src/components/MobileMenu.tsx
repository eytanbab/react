const MobileMenu = () => {
  return (
    <div className='absolute inset-0 h-full w-full bg-black flex items-center justify-center text-xl uppercase'>
      <div className='flex flex-col items-start gap-8 px-12 w-full'>
        <p className='flex gap-x-2'>
          <span className='font-bold'>00</span> Home
        </p>
        <p className='flex gap-x-2'>
          <span className='font-bold'>01</span> Destination
        </p>
        <p className='flex gap-x-2'>
          <span className='font-bold'>02</span> Crew
        </p>
        <p className='flex gap-x-2'>
          <span className='font-bold'>03</span> Technology
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
