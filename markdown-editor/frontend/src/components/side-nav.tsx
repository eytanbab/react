import { useGetSession } from '../hooks/use-get-session';
import UserAvatar from './user-avatar';

const SideNav = () => {
  const [session] = useGetSession();

  return (
    <div className='h-full w-96 p-4 flex items-start'>
      {session && <UserAvatar />}
    </div>
  );
};

export default SideNav;
