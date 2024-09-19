import { useGetMarkdowns } from '../hooks/use-get-markdowns';
import { useGetSession } from '../hooks/use-get-session';
import SavedMarkdownCard from './saved-markdown-card';
import UserAvatar from './user-avatar';

const SideNav = ({ refresh }: { refresh: boolean }) => {
  const { session } = useGetSession();
  const { markdowns, loading, error } = useGetMarkdowns(refresh);

  if (!session) return null;

  return (
    <div className='h-full w-80 p-4 flex flex-col items-start shrink-0 gap-8'>
      <UserAvatar />
      <div className='w-full flex flex-col gap-2 overflow-y-auto h-full'>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {markdowns?.map((markdown) => {
          return <SavedMarkdownCard key={markdown.id} markdown={markdown} />;
        })}
      </div>
    </div>
  );
};

export default SideNav;
