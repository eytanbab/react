import { Link, useLocation } from 'react-router-dom';

const MarkdownTutorialButton = () => {
  const location = useLocation();
  return (
    <Link
      className='border border-slate-800/25 dark:border-slate-300/50 rounded-lg py-1 px-2'
      to={location.pathname === '/how-to-use' ? '/' : 'how-to-use'}
    >
      {location.pathname === '/how-to-use' ? 'Markdown Editor' : 'How to use'}
    </Link>
  );
};

export default MarkdownTutorialButton;
