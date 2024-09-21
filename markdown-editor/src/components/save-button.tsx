import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

type Props = {
  content: string;
  onSave: () => void;
};
const SaveButton = ({ content, onSave }: Props) => {
  const { id } = useParams<{ id: string }>();
  const navigator = useNavigate();
  const isEmpty = content === '';
  const handleSubmit = async () => {
    try {
      // Save the content temporarily in localStorage
      localStorage.setItem('draftContent', content);

      // Get the current session to access user details
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session?.user) {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
        });

        if (error) {
          console.error('Error with Google sign in:', error.message);
        } else {
          // If login is successful, retrieve the saved content
          const savedContent = localStorage.getItem('draftContent') || '';
          if (!id) {
            // Insert new markdown with the saved content
            const { data, error } = await supabase
              .from('markdown')
              .insert([{ content: savedContent, user_id: session?.user.id }])
              .select();
            if (error) {
              console.error('Error saving markdown:', error.message);
            } else {
              console.log('Markdown saved successfully');
              onSave();
              navigator(`/${data[0].id}`);
            }
          } else {
            // Update existing markdown with the saved content
            const { error } = await supabase
              .from('markdown')
              .update({ content: savedContent })
              .eq('id', id);

            if (error) {
              console.error('Error updating markdown:', error.message);
            } else {
              onSave();
              console.log('Markdown updated successfully');
            }
          }
          // Clear the saved draft from localStorage after saving
          localStorage.removeItem('draftContent');
        }
      } else {
        // User is already logged in, proceed with the save
        const userId = session.user.id;

        if (!id) {
          // Insert new markdown
          const { data, error } = await supabase
            .from('markdown')
            .insert([{ content: content, user_id: userId }])
            .select();
          if (error) {
            console.error('Error saving markdown:', error.message);
          } else {
            console.log('Markdown saved successfully');
            onSave();
            navigator(`/${data[0].id}`);
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
      }
    } catch (err) {
      console.error('Error submitting markdown:', err);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={isEmpty}
      className='bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 absolute px-4 py-1 rounded-full right-4 bottom-8 drop-shadow-md disabled:bg-slate-400 disabled:dark:bg-slate-700 disabled:drop-shadow-none'
    >
      {id ? 'Update Markdown' : 'Save Markdown'}
    </button>
  );
};

export default SaveButton;
