import { useState } from 'react';
import Content from './content';
import Separator from './separator';
import Markdown from './markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState<string>('');

  return (
    <div className='flex h-[calc(100%-4rem)] gap-4 p-2 w-full'>
      <Content setMarkdown={setMarkdown} />
      <Separator />
      <Markdown markdown={markdown} />
    </div>
  );
};

export default MarkdownEditor;
