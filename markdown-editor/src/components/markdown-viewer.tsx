import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SaveButton from './save-button';

type Props = {
  content: string;
  onSave: () => void;
};

const MarkdownViewer = ({ content, onSave }: Props) => {
  return (
    <div className='w-full border-none outline-none resize-none bg-slate-50 dark:bg-slate-900 px-4 py-8 rounded-xl drop-shadow-md relative h-1/2 lg:h-full lg:overflow-y-scroll scrollbar-hide'>
      <Markdown
        remarkPlugins={[remarkGfm]}
        className='markdown w-full p-4 drop-shadow-md dark:bg-slate-900 rounded-xl break-words overflow-auto whitespace-pre-wrap scrollbar-hide h-full'
      >
        {content}
      </Markdown>
      <SaveButton content={content} onSave={onSave} />
    </div>
  );
};

export default MarkdownViewer;
