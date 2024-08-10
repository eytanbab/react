import MobileNavBar from './components/Navbar/MobileNavBar';
import Home from './components/Home';
import Destination from './components/Pages/Destination';
import Crew from './components/Pages/Crew';
import Technologies from './components/Pages/Technologies';

function App() {
  return (
    <div className={` text-white flex flex-col h-screen`}>
      {/* NAVBAR */}
      <MobileNavBar />
      {/* PAGES SECITON */}
      {/* <Home /> */}
      {/* <Destination /> */}
      {/* <Crew /> */}
      <Technologies />
    </div>
  );
}

export default App;
