import Home from './components/Home';
import MobileNavBar from './components/Navbar/MobileNavBar';
import Destination from './components/Pages/Destination';

function App() {
  return (
    <div className={` text-white flex flex-col p-6 h-screen`}>
      {/* NAVBAR */}
      <MobileNavBar />
      {/* PAGES SECITON */}
      {/* <Home /> */}
      <Destination />
    </div>
  );
}

export default App;
