import { NavLink } from 'react-router-dom';

const MobileMenu = ({
  setIsOpenNav,
}: {
  setIsOpenNav: (x: boolean) => void;
}) => {
  const closeNavHandler = () => {
    setIsOpenNav(false);
  };
  return (
    <div className='absolute inset-0 h-full w-full bg-black flex items-center justify-center text-xl uppercase z-10'>
      <div className='flex flex-col items-start gap-8 px-12 w-full'>
        <NavLink
          to='/'
          onClick={closeNavHandler}
          className={({ isActive }) => (isActive ? 'border-r-2 w-full' : '')}
        >
          <p className='flex gap-x-2'>
            <span className='font-bold'>00</span> Home
          </p>
        </NavLink>
        <NavLink
          to='/destination'
          onClick={closeNavHandler}
          className={({ isActive }) => (isActive ? 'border-r-2 w-full' : '')}
        >
          <p className='flex gap-x-2'>
            <span className='font-bold'>01</span> Destination
          </p>
        </NavLink>
        <NavLink
          to='/crew'
          onClick={closeNavHandler}
          className={({ isActive }) => (isActive ? 'border-r-2 w-full' : '')}
        >
          <p className='flex gap-x-2'>
            <span className='font-bold'>02</span> Crew
          </p>
        </NavLink>
        <NavLink
          to='/technology'
          onClick={closeNavHandler}
          className={({ isActive }) => (isActive ? 'border-r-2 w-full' : '')}
        >
          <p className='flex gap-x-2'>
            <span className='font-bold'>03</span> Technology
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
