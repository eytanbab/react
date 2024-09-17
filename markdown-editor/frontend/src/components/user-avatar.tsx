import { supabase } from '../../lib/supabaseClient';
import { useGetSession } from '../hooks/use-get-session';

const UserAvatar = () => {
  const [session] = useGetSession();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error logging out:', error.message);
    else {
      console.log('Logged out successfully');
    }
  };

  return session ? (
    <div className='w-full flex items-center justify-between'>
      <h1 className='text-xl'>
        Hello, {session.user.user_metadata.full_name.split(' ')[0]}
      </h1>
      <button onClick={handleLogout}>
        <img
          src={session.user.user_metadata.picture}
          className='size-8 rounded-full'
        />
      </button>
    </div>
  ) : null;
};

export default UserAvatar;
