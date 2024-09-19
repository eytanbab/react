type Props = {
  markdown: {
    id: string;
    title?: string;
    content: string;
    is_favorite: boolean;
    user_id: string;
  };
};

const SavedMarkdownCard = ({ markdown }: Props) => {
  return (
    <div className='bg-slate-50 dark:bg-slate-900 w-full min-h-24 rounded-xl drop-shadow-md p-2'>
      <div className='line-clamp-3'>{markdown.content}</div>
    </div>
  );
};

export default SavedMarkdownCard;
