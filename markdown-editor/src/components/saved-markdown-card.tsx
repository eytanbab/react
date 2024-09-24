import { IoIosCloseCircleOutline } from 'react-icons/io';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';
import { useState } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

type Props = {
  markdown: {
    id: string;
    title?: string;
    content: string;
    is_favorite: boolean;
    user_id: string;
    created_at: string;
    updated_at: string;
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
        toast(
          `${
            !isFavorite ? 'Markdown was favorited!' : 'Markdown was unfavorited'
          }`
        );
        console.log(isFavorite);
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
      <div className='flex flex-col w-full justify-between '>
        <p className='line-clamp-3 w-full break-words max-w-60'>
          {markdown.content}
        </p>
        <p className='text-sm text-slate-500'>
          Last updated:{' '}
          <span>{new Date(markdown.updated_at).toLocaleString('en-US')}</span>
        </p>
      </div>
      <div className='flex flex-col items-center justify-between'>
        <Dialog>
          <DialogTrigger asChild>
            <button>
              <IoIosCloseCircleOutline className='size-6' />
            </button>
          </DialogTrigger>
          <DialogContent className='w-80 rounded-md drop-shadow-md'>
            <DialogHeader>
              <DialogTitle>Delete markdown</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this markdown?
              </DialogDescription>
            </DialogHeader>
            <div className='flex mt-0 justify-center gap-8'>
              <DialogClose asChild>
                <button
                  onClick={handleDelete}
                  className='bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900  px-2 py-1 rounded-md'
                >
                  Confirm
                </button>
              </DialogClose>
              <DialogClose asChild>
                <button
                  className='outline outline-1 px-2 py-1 rounded-md outline-slate-900 dark:outline-slate-100
                '
                >
                  Cancel
                </button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
        <button onClick={handleFavorite}>
          <CiStar className={`${isFavorite ? 'text-[#ED8A19]' : ''} size-6`} />
        </button>
      </div>
    </div>
  );
};

export default SavedMarkdownCard;
