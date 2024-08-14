import { Link } from 'react-router-dom';

const Home = () => {
  const mobileBG = 'bg-[url("./assets/home/background-home-mobile.jpg")]';
  const tabletBG = 'md:bg-[url("./assets/home/background-home-tablet.jpg")]';
  const desktopBG = 'lg:bg-[url("./assets/home/background-home-desktop.jpg")]';

  return (
    <section
      className={`${mobileBG} ${tabletBG} ${desktopBG} bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center p-6 gap-8 md:p-40`}
    >
      <p className='uppercase md:text-3xl'>So, you want to travel to</p>
      <p className='uppercase text-7xl md:text-9xl'>Space</p>
      <p className='text-base'>
        Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax becauase we'll give you a truly out of this world
        experience!
      </p>
      <Link
        to='/destination'
        className='uppercase bg-white text-black rounded-full w-48 h-48 text-3xl flex items-center justify-center'
      >
        Explore
      </Link>
    </section>
  );
};

export default Home;
