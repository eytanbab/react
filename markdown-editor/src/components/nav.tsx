import { useGetSession } from '../hooks/use-get-session';
import SignInButton from './sign-in-button';
import ModeToggle from './mode-toggle';
import Title from './title';
import LogoutButton from './logout-button';
// import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const { session } = useGetSession();
  // const location = useLocation();
  return (
    <div className='w-full hidden lg:flex items-center justify-between p-4'>
      {!session && <SignInButton />}
      {/* {session && <SearchBar />} */}
      <div className='flex gap-4 items-center w-full justify-end'>
        <div className='flex w-full items-center gap-2 lg:hidden'>
          <Title />
        </div>
        <div className='lg:hidden'>
          <LogoutButton />
        </div>
        <div>
          <ModeToggle />
        </div>

        {/* <Link
          className='border border-slate-800/25 dark:border-slate-300/50 rounded-lg py-1 px-2'
          to={location.pathname === '/how-to-use' ? '/' : 'how-to-use'}
        >
          {location.pathname === '/how-to-use'
            ? 'Markdown Editor'
            : 'How to use'}
        </Link> */}
      </div>
    </div>
  );
};

export default Nav;
