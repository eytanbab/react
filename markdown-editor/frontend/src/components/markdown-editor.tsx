import { useState } from 'react';
import Content from './content';
import Markdown from './markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState<string>('');

  return (
    <div className='grid grid-cols-2 h-[calc(100%-4rem)] gap-4 px-2 py-8 w-full'>
      <Content setMarkdown={setMarkdown} />
      <Markdown markdown={markdown} />
    </div>
  );
};

export default MarkdownEditor;
