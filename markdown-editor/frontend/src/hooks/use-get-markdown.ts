import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export const useGetMarkdown = (id: string | undefined) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('markdown')
          .select('content')
          .eq('id', id)
          .single();
        if (error) throw error;
        setMarkdown(data.content);
      } catch (err) {
        setError('Failed to fetch markdown');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [id]);

  return { markdown, loading, error };
};
