import { ThemeProvider } from './components/theme-provider';
import SideNav from './components/side-nav';
import Separator from './components/separator';
import Nav from './components/nav';

const App = () => {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <div className='w-full h-screen flex items-start justify-start bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-100'>
        <SideNav />
        <Separator />
        <Nav />
      </div>
    </ThemeProvider>
  );
};

export default App;
