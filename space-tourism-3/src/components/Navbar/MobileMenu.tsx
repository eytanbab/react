import { NavLink } from 'react-router-dom';
import { links } from '../../utils/constants';

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
      <div className='flex flex-col items-start gap-8 pl-12 w-full'>
        {links.map((link, idx) => {
          return (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeNavHandler}
              className={({ isActive }) =>
                isActive ? 'border-r-4 w-full' : 'w-full'
              }
            >
              <p className='flex gap-x-4'>
                <span className='font-bold'>{`0${idx + 1}`}</span> {link.name}
              </p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
