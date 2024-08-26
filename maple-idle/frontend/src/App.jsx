import React from 'react';
import MainMenu from './components/MainMenu';
import Login from './components/Login';
import { useUser } from '@clerk/clerk-react';

const App = () => {
  const { isSignedIn } = useUser();
  if (isSignedIn) return <MainMenu />;
  return <Login />;
};

export default App;
