import { Link, NavLink } from 'react-router-dom';
import { useGetMarkdowns } from '../hooks/use-get-markdowns';
import { useGetSession } from '../hooks/use-get-session';
import SavedMarkdownCard from './saved-markdown-card';
import UserAvatar from './user-avatar';
import { FaSort } from 'react-icons/fa';
import { useMemo, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

type Props = {
  refresh: boolean;
  onDelete: () => void;
  setContent: (content: string) => void;
};

type Markdown = {
  id: string;
  title?: string;
  content: string;
  is_favorite: boolean;
  user_id: string;
  created_at: Date;
};

const SideNav = ({ refresh, onDelete, setContent }: Props) => {
  const { session } = useGetSession();
  const { markdowns, loading, error } = useGetMarkdowns(refresh);
  const [ascending, setAscending] = useState(false);

  const handleSort = () => {
    setAscending((prev) => !prev);
    markdowns?.sort();
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error logging out:', error.message);
    else {
      console.log('Logged out successfully');
    }
  };

  const sortedMarkdowns = useMemo(() => {
    if (!markdowns) return;
    return [...markdowns].sort((a: Markdown, b: Markdown) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      if (ascending) {
        return dateA - dateB; // Ascending order
      } else {
        return dateB - dateA;
      }
    });
  }, [markdowns, ascending]);

  if (!session) return null;

  return (
    <div className='h-full w-80 p-4 flex flex-col items-start shrink-0 gap-8'>
      <UserAvatar />
      <div className='w-full flex flex-col gap-2 overflow-y-auto h-full scrollbar-hide'>
        <div className='flex justify-between items-center mb-4'>
          <Link
            className='
            dark:bg-slate-200 
            dark:text-slate-900 bg-slate-900 text-slate-200
            rounded-lg py-1 px-2'
            to='/'
          >
            Create new markdown
          </Link>
          <button
            onClick={handleSort}
            className='fill-slate-800 dark:fill-slate-200 hover:cursor-pointer flex items-center justify-center'
          >
            <FaSort className='size-6' />
          </button>
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {sortedMarkdowns?.map((markdown) => {
          return (
            <NavLink key={markdown.id} to={`/${markdown.id}`}>
              {({ isActive }) => (
                <SavedMarkdownCard
                  markdown={markdown}
                  isActive={isActive}
                  onDelete={onDelete}
                  setContent={setContent}
                />
              )}
            </NavLink>
          );
        })}
      </div>
      <div className='w-full'>
        <div className='w-full h-[1px] bg-slate-900/25 dark:bg-slate-100/25' />
        <button onClick={handleLogout} className='w-full text-center py-2'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNav;
