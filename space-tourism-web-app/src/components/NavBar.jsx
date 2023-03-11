import Logo from '../../helpers/starter-code/assets/shared/logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='fixed top-16 flex w-full  items-center justify-between'>
      {/* LOGO */}
      <Link to='/'>
        <img src={Logo} alt='logo' className='mx-12 h-12 w-12' />
      </Link>
      {/* NAV LINE */}
      <div className='absolute left-52 z-10 h-[1px] w-[64rem] self-center bg-white/20'></div>

      {/* BUTTONS  */}
      <div className='absolute right-0 flex h-24 w-[96rem] items-center justify-center gap-24 bg-white/5 py-12 px-3 text-xl text-white backdrop-blur-2xl'>
        <Link to='/'>
          <button className='btn-navbar '>
            <h1 className='font-bold'>00</h1> HOME
          </button>
        </Link>
        <Link to='/destination'>
          <button className='btn-navbar'>
            <h1 className='font-bold'>01</h1> DESTINATION
          </button>
        </Link>
        <Link to='crew'>
          <button className='btn-navbar'>
            <h1 className='font-bold'>02</h1> CREW
          </button>
        </Link>
        <Link to='technology'>
          <button className='btn-navbar'>
            <h1 className='font-bold'>03</h1> TECHNOLOGY
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
