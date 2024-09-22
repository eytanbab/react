import { useEffect } from 'react';
import Content from './content';
import { useGetMarkdown } from '../hooks/use-get-markdown';
import { useLocation, useParams } from 'react-router-dom';
import MarkdownViewer from './markdown-viewer';

type Props = {
  onSave: () => void;
  content: string;
  setContent: (content: string) => void;
};

const MarkdownEditor = ({ onSave, content, setContent }: Props) => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { markdown: fetchedMarkdown } = useGetMarkdown(id);

  useEffect(() => {
    if (location.pathname === '/') {
      setContent('');
    } else {
      setContent(fetchedMarkdown);
    }
  }, [location.pathname, fetchedMarkdown, setContent]);

  return (
    <div className='flex flex-col lg:grid grid-cols-2 gap-4 p-2 w-full h-[calc(100%-4rem)] items-start'>
      <Content markdown={content} setMarkdown={setContent} />
      <MarkdownViewer content={content} onSave={onSave} />
    </div>
  );
};

export default MarkdownEditor;
