import { supabase } from '../../lib/supabaseClient';

const SignInButton = () => {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Error with Google sign in:', error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className='rounded-full bg-slate-900 text-slate-200 dark:bg-slate-200 dark:text-slate-900 py-1 px-4'
    >
      Sign in
    </button>
  );
};

export default SignInButton;
