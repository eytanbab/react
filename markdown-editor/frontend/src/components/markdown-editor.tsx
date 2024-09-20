import { useEffect, useState } from 'react';
import Content from './content';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SaveButton from './save-button';
import { useGetMarkdown } from '../hooks/use-get-markdown';
import { useParams } from 'react-router-dom';

const MarkdownEditor = ({ onSave }: { onSave: () => void }) => {
  const { id } = useParams<{ id: string }>();
  const [markdown, setMarkdown] = useState<string>('');
  const { markdown: fetchedMarkdown } = useGetMarkdown(id);

  useEffect(() => {
    setMarkdown(fetchedMarkdown);
  }, [fetchedMarkdown]);

  return (
    <div className='grid grid-cols-2 h-[calc(100%-4rem)] gap-4 p-2 w-full'>
      <Content markdown={markdown} setMarkdown={setMarkdown} />
      <Markdown
        remarkPlugins={[remarkGfm]}
        className='markdown w-full p-4 bg-slate-50 drop-shadow-md dark:bg-slate-900 rounded-xl break-words max-h-full overflow-auto whitespace-pre-wrap scrollbar-hide'
      >
        {markdown}
      </Markdown>
      <SaveButton markdown={markdown} onSave={onSave} />
    </div>
  );
};

export default MarkdownEditor;
