import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Session } from '@supabase/supabase-js';

export const useGetSession = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Get the current session
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    getSession();

    // Listen for changes in authentication state
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Cleanup the listener when component unmounts
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return [session];
};
