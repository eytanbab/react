import { supabase } from '../../lib/supabaseClient';

const SignOutButton = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error logging out:', error.message);
    else {
      console.log('Logged out successfully');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className='bg-red-500 text-white px-4 py-2 rounded mt-4'
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
