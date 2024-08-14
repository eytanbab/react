import MemberCarousel from './MemberCarousel';

const Crew = () => {
  const mobileBG = 'bg-[url("./assets/crew/background-crew-mobile.jpg")]';
  const tabletBG = 'md:bg-[url("./assets/crew/background-crew-tablet.jpg")]';
  const desktopBG = 'lg:bg-[url("./assets/crew/background-crew-desktop.jpg")]';
  return (
    <div
      className={`${mobileBG} ${tabletBG} ${desktopBG} bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center p-6 gap-8 md:p-10`}
    >
      <div className='flex flex-col items-center h-[calc(100%-5rem)] justify-between md:h-[calc(100%-8rem)] p-6 md:p-10 md:justify-start'>
        <p className='uppercase flex gap-2 w-full justify-center md:justify-start md:gap-6 md:text-xl'>
          <span className='text-white/25 font-bold'>02</span>Meet your crew
        </p>
        <MemberCarousel />
      </div>
    </div>
  );
};

export default Crew;
