import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

const LogoutButton = () => {
  const navigator = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    navigator('/');
    if (error) console.error('Error logging out:', error.message);
    else {
      console.log('Logged out successfully');
    }
  };

  return (
    <div className='lg:w-full'>
      <button onClick={handleLogout} className='w-full text-center py-2'>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
