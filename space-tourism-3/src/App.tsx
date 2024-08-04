import MobileNavBar from './components/MobileNavBar';

function App() {
  return (
    <div className='bg-[url("./assets/home/background-home-mobile.jpg")] bg-cover bg-no-repeat text-white flex flex-col p-6 h-screen'>
      {/* NAVBAR */}
      <MobileNavBar />
      {/* HERO SECITON */}
      <section className=' w-full h-full flex flex-col items-center justify-center gap-8'>
        <p className='uppercase'>So, you want to travel to</p>
        <p className='uppercase text-7xl'>Space</p>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax becauase we'll give you a truly out of this world
          experience!
        </p>
        <button className='uppercase bg-white text-black rounded-full w-48 h-48 text-3xl'>
          Explore
        </button>
      </section>
    </div>
  );
}

export default App;
