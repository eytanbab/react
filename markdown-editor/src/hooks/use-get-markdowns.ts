import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useGetSession } from './use-get-session';

type Markdown = {
  id: string;
  title?: string;
  content: string;
  is_favorite: boolean;
  user_id: string;
  created_at: Date;
};

export const useGetMarkdowns = (refresh: boolean) => {
  const [markdowns, setMarkdowns] = useState<Markdown[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { session } = useGetSession();
  const userId = session?.user.id;

  const getMarkdowns = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const { data: markdown, error } = await supabase
        .from('markdown')
        .select('id,title,content,is_favorite,user_id, created_at')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setMarkdowns(markdown);
    } catch (err) {
      setError('Failed to fetch saved markdowns');
      console.error('Error fetching markdowns:', err);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    getMarkdowns();
  }, [getMarkdowns, refresh]);

  return { markdowns, loading, error };
};
