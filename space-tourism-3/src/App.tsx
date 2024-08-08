import Home from './components/Home';
import MobileNavBar from './components/Navbar/MobileNavBar';
import Crew from './components/Pages/Crew';
import Destination from './components/Pages/Destination';

function App() {
  return (
    <div className={` text-white flex flex-col h-screen`}>
      {/* NAVBAR */}
      <MobileNavBar />
      {/* PAGES SECITON */}
      {/* <Home /> */}
      {/* <Destination /> */}
      <Crew />
    </div>
  );
}

export default App;
