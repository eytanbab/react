import { useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

type Props = {
  content: string;
  onSave: () => void;
};
const SaveButton = ({ content, onSave }: Props) => {
  const { id } = useParams<{ id: string }>();

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

      if (!id) {
        // Insert new markdown
        const { error } = await supabase
          .from('markdown')
          .insert([{ content: content, user_id: userId }]);
        if (error) {
          console.error('Error saving markdown:', error.message);
        } else {
          console.log('Markdown saved successfully');
          onSave();
        }
      } else {
        // Update existing markdown
        const { error } = await supabase
          .from('markdown')
          .update({ content: content })
          .eq('id', id);

        if (error) {
          console.error('Error updating markdown:', error.message);
        } else {
          onSave();
          console.log('Markdown updated successfully');
        }
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
      {id ? 'Update Markdown' : 'Save Markdown'}
    </button>
  );
};

export default SaveButton;
