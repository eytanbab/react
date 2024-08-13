import Logo from '../../assets/shared/logo.svg';
import { links } from '../../utils/constants';
import { NavLink } from 'react-router-dom';

const TabletNavBar = () => {
  return (
    <>
      <nav className='hidden w-full items-center absolute top-0 left-0 h-24 md:flex gap-8 '>
        <img src={Logo} width={32} height={32} className='ml-6' />
        <ul className='flex gap-12 items-center bg-white/5 w-full h-full justify-center px-10'>
          {links.map((link, idx) => {
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `w-full h-full flex items-center justify-center uppercase ${
                    isActive ? 'border-b-4' : ''
                  }`
                }
              >
                <p className='flex gap-x-4'>
                  <span className='font-bold'>{`0${idx + 1}`}</span> {link.name}
                </p>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default TabletNavBar;
