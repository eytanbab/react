import { supabase } from '../../lib/supabaseClient';

const LogoutButton = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error logging out:', error.message);
    else {
      console.log('Logged out successfully');
    }
  };

  return (
    <div className='w-full'>
      <div className='w-full h-[1px] bg-slate-900/25 dark:bg-slate-100/25' />
      <button onClick={handleLogout} className='w-full text-center py-2'>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
