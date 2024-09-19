import { supabase } from '../../lib/supabaseClient';

type Props = {
  markdown: string;
};
const SaveButton = ({ markdown }: Props) => {
  const handleSubmit = async () => {
    try {
      // Get the current session to access user details
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session?.user) {
        console.error('User not authenticated:', sessionError?.message);
        return;
      }

      const userId = session.user.id;

      // Insert the markdown content and user ID into the markdowns table
      const { error } = await supabase
        .from('markdown')
        .insert([{ content: markdown, user_id: userId }]);

      if (error) {
        console.error('Error saving markdown:', error.message);
      } else {
        console.log('Markdown saved successfully');
      }
    } catch (err) {
      console.error('Error submitting markdown:', err);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className='bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-950 absolute px-4 py-2 rounded-full right-4 bottom-8 drop-shadow-md'
    >
      Save Markdown
    </button>
  );
};

export default SaveButton;
