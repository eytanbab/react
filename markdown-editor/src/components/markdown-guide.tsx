import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownGuide = () => {
  const [tutorialContent, setTutorialContent] = useState('');

  useEffect(() => {
    import('../markdown-tutorial.md')
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setTutorialContent(text))
          .catch((err) => console.log('Error fetching markdown:', err));
      })
      .catch((err) => console.log('Error importing markdown:', err));
  }, []);
  return (
    <div className='h-[calc(100%-4rem)] gap-4 p-2 w-full'>
      <Markdown
        remarkPlugins={[remarkGfm]}
        className='markdown w-full dark:bg-slate-900 rounded-xl break-words overflow-auto whitespace-pre-wrap scrollbar-hide h-full p-4'
      >
        {tutorialContent}
      </Markdown>
    </div>
  );
};

export default MarkdownGuide;
