import { IoIosCloseCircleOutline } from 'react-icons/io';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

type Props = {
  markdown: {
    id: string;
    title?: string;
    content: string;
    is_favorite: boolean;
    user_id: string;
  };
  isActive: boolean;
  onDelete: () => void;
  setContent: (content: string) => void;
};

const SavedMarkdownCard = ({
  markdown,
  isActive,
  onDelete,
  setContent,
}: Props) => {
  const navigate = useNavigate();

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('markdown')
        .delete()
        .eq('id', markdown.id);

      if (error) {
        console.error('Error deleting markdown:', error.message);
      } else {
        onDelete();
        console.log('Markdown deleted successfully');
        setContent('');
        navigate('/');
      }
    } catch (err) {
      console.error('Error submitting markdown:', err);
    }
  };
  return (
    <div
      className={`
    ${
      isActive
        ? 'text-slate-800 dark:text-slate-200'
        : 'text-slate-400 dark:text-slate-600'
    }
    relative bg-slate-50 dark:bg-slate-900 w-full min-h-24 rounded-xl drop-shadow-md p-2`}
    >
      <p className='line-clamp-3'>{markdown.content}</p>
      <button onClick={handleDelete} className='absolute top-2 right-2 z-50'>
        <IoIosCloseCircleOutline className='size-6' />
      </button>
    </div>
  );
};

export default SavedMarkdownCard;
