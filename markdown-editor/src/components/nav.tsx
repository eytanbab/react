import { useGetSession } from '../hooks/use-get-session';
import SignInButton from './sign-in-button';
import ModeToggle from './mode-toggle';
import Title from './title';
import LogoutButton from './logout-button';
import MarkdownTutorialButton from './markdown-tutorial-button';

const Nav = () => {
  const { session } = useGetSession();
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
        <MarkdownTutorialButton />
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Nav;
