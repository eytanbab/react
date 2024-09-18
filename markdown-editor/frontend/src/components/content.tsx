type Props = {
  setMarkdown: (e: string) => void;
};

const Content = ({ setMarkdown }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <textarea
      onChange={handleChange}
      className='w-full border-none outline-none resize-none bg-slate-50 dark:bg-slate-900 p-4 rounded-xl drop-shadow-md'
    />
  );
};

export default Content;
