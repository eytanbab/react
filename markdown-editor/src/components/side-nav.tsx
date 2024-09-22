import { NavLink } from 'react-router-dom';
import { useGetMarkdowns } from '../hooks/use-get-markdowns';
import { useGetSession } from '../hooks/use-get-session';
import SavedMarkdownCard from './saved-markdown-card';
import Title from './title';
import { TbArrowsSort } from 'react-icons/tb';
import { useEffect, useMemo, useState } from 'react';
import LogoutButton from './logout-button';
import SearchBar from './search-bar';

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
  created_at: string;
  updated_at: string;
};

const SideNav = ({ refresh, onDelete, setContent }: Props) => {
  const { session } = useGetSession();
  const { markdowns, loading, error } = useGetMarkdowns(refresh);
  const [ascending, setAscending] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredMarkdowns, setFilteredMarkdowns] = useState<
    Markdown[] | undefined
  >([]);

  useEffect(() => {
    if (markdowns) {
      // Filter markdowns when query changes
      const results = markdowns.filter((markdown) =>
        markdown.content.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMarkdowns(results);
    }
  }, [query, markdowns]);

  const handleFilterMarkdowns = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSort = () => {
    setAscending((prev) => !prev);
    markdowns?.sort();
  };

  const sortedMarkdowns = useMemo(() => {
    const markdownsToSort = query ? filteredMarkdowns : markdowns;
    if (!markdownsToSort) return [];
    return [...markdownsToSort].sort((a: Markdown, b: Markdown) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      if (ascending) {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }, [markdowns, filteredMarkdowns, ascending, query]);

  if (!session) return null;

  return (
    <div className='h-full w-80 p-4 hidden lg:flex flex-col items-start shrink-0 gap-8 '>
      <div className='w-full hidden lg:block'>
        <Title />
      </div>
      <div className='w-full flex flex-col gap-2 overflow-y-auto h-full scrollbar-hide'>
        <div className='flex justify-between items-center mb-4 gap-2'>
          <SearchBar onChange={handleFilterMarkdowns} value={query} />
          <button
            onClick={handleSort}
            className='fill-slate-800 dark:fill-slate-200 hover:cursor-pointer flex items-center justify-center'
          >
            <TbArrowsSort className='size-6' />
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
      <div className='flex flex-col items-center justify-center w-full gap-2'>
        <div className='w-full h-[1px] bg-slate-900/25 dark:bg-slate-100/25' />
        <LogoutButton />
      </div>
    </div>
  );
};

export default SideNav;
