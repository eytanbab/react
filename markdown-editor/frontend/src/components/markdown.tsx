type Props = {
  markdown: string;
};

const Markdown = ({ markdown }: Props) => {
  return (
    <div className='flex-1 shrink-0 bg-slate-50 drop-shadow-md dark:bg-slate-900 p-4 rounded-xl break-words max-h-full overflow-auto'>
      {markdown}
    </div>
  );
};

export default Markdown;
