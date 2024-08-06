import Home from './components/Home';
import MobileNavBar from './components/Navbar/MobileNavBar';

function App() {
  return (
    <div className={` text-white flex flex-col p-6 h-screen`}>
      {/* NAVBAR */}
      <MobileNavBar />
      {/* HERO SECITON */}
      <Home />
    </div>
  );
}

export default App;
