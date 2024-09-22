import { Link } from 'react-router-dom';
import { useGetSession } from '../hooks/use-get-session';

const Title = () => {
  const { session } = useGetSession();

  return session ? (
    <Link to='/' className='font-bold text-lg w-full'>
      Markdown Editor
    </Link>
  ) : null;
};

export default Title;
