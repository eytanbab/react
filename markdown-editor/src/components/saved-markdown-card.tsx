import { IoIosCloseCircleOutline } from 'react-icons/io';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';
import { useState } from 'react';

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
  const [isFavorite, setIsFavorite] = useState(markdown.is_favorite);

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

  const handleFavorite = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('markdown')
        .update({ is_favorite: !isFavorite })
        .eq('id', markdown.id);

      if (error) {
        console.log(error);
      } else {
        setIsFavorite((prev) => !prev);
      }
    } catch (err) {
      console.log(err);
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
    flex bg-slate-50 dark:bg-slate-900 w-full min-h-24 rounded-xl drop-shadow-md p-2`}
    >
      <p className='line-clamp-3 w-full break-words'>{markdown.content}</p>
      <div className='flex flex-col items-center justify-between'>
        <button onClick={handleDelete} className='self-start'>
          <IoIosCloseCircleOutline className='size-6' />
        </button>
        <button onClick={handleFavorite}>
          <CiStar className={`${isFavorite ? 'text-[#ED8A19]' : ''} size-6`} />
        </button>
      </div>
    </div>
  );
};

export default SavedMarkdownCard;
