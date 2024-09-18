import { useGetSession } from '../hooks/use-get-session';
import SignInButton from './sign-in-button';
import ModeToggle from './mode-toggle';
import SearchBar from './search-bar';

const Nav = () => {
  const { session } = useGetSession();
  return (
    <div className='w-full flex items-center justify-between px-2 py-4'>
      {!session && <SignInButton />}
      {session && <SearchBar />}
      <ModeToggle />
    </div>
  );
};

export default Nav;
