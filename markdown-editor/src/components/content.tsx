import CopyButton from './copy-button';

type Props = {
  markdown: string;
  setMarkdown: (e: string) => void;
};

const Content = ({ markdown, setMarkdown }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className='w-full border-none outline-none resize-none bg-slate-50 dark:bg-slate-900 px-4 py-8 rounded-xl drop-shadow-md relative'>
      <textarea
        value={markdown}
        onChange={handleChange}
        className='w-full h-full border-none outline-none resize-none bg-slate-50 dark:bg-slate-900 scrollbar-hide'
      />
      <CopyButton content={markdown}/>
    </div>
  );
};

export default Content;