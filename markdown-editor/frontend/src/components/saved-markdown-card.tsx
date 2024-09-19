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
    <div className='bg-slate-50 dark:bg-slate-900 w-full h-40 rounded-xl drop-shadow-md p-2 truncate whitespace-pre-wrap'>
      {markdown.content}
    </div>
  );
};

export default SavedMarkdownCard;
