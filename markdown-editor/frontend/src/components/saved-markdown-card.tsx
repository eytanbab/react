import { IoIosCloseCircleOutline } from 'react-icons/io';

type Props = {
  markdown: {
    id: string;
    title?: string;
    content: string;
    is_favorite: boolean;
    user_id: string;
  };
};

const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
};

const SavedMarkdownCard = ({ markdown }: Props) => {
  return (
    <div className='relative bg-slate-50 dark:bg-slate-900 w-full min-h-24 rounded-xl drop-shadow-md p-2'>
      <div className='line-clamp-3'>{markdown.content}</div>
      <button onClick={handleDelete} className='absolute top-2 right-2 z-50'>
        <IoIosCloseCircleOutline className='size-6' />
      </button>
    </div>
  );
};

export default SavedMarkdownCard;
