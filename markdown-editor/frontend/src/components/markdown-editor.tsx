import { useState } from 'react';
import Content from './content';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState<string>('');

  return (
    <div className='grid grid-cols-2 h-[calc(100%-4rem)] gap-4 p-2 w-full'>
      <Content setMarkdown={setMarkdown} />
      <Markdown
        remarkPlugins={[remarkGfm]}
        className='markdown w-full bg-slate-50 drop-shadow-md dark:bg-slate-900 p-4 rounded-xl break-words max-h-full overflow-auto'
      >
        {markdown}
      </Markdown>
    </div>
  );
};

export default MarkdownEditor;
