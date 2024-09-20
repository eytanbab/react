import { NavLink } from 'react-router-dom';
import { useGetMarkdowns } from '../hooks/use-get-markdowns';
import { useGetSession } from '../hooks/use-get-session';
import SavedMarkdownCard from './saved-markdown-card';
import UserAvatar from './user-avatar';

type Props = {
  refresh: boolean;
  onDelete: () => void;
  setContent: (content: string) => void;
};

const SideNav = ({ refresh, onDelete, setContent }: Props) => {
  const { session } = useGetSession();
  const { markdowns, loading, error } = useGetMarkdowns(refresh);

  if (!session) return null;

  return (
    <div className='h-full w-80 p-4 flex flex-col items-start shrink-0 gap-8'>
      <UserAvatar />
      <div className='w-full flex flex-col gap-2 overflow-y-auto h-full scrollbar-hide'>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {markdowns?.map((markdown) => {
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
    </div>
  );
};

export default SideNav;
