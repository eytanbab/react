import { Link } from 'react-router-dom';
import { useGetSession } from '../hooks/use-get-session';

const UserAvatar = () => {
  const { session } = useGetSession();

  return session ? (
    <div className='w-full flex items-center justify-between'>
      <Link to='/' className='font-bold text-lg'>
        Markdown Editor
      </Link>

      <img
        src={session.user.user_metadata.picture}
        className='size-8 rounded-full'
      />
    </div>
  ) : null;
};

export default UserAvatar;
