import { ThemeProvider } from './components/theme-provider';
import SideNav from './components/side-nav';
import Separator from './components/separator';
import Nav from './components/nav';
import MarkdownEditor from './components/markdown-editor';

const App = () => {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <div className='h-screen flex bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-100'>
        <SideNav />
        <Separator />
        <div className='flex flex-col w-full gap-x-2'>
          <Nav />
          <MarkdownEditor />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
