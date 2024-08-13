import MemberCarousel from './MemberCarousel';

const Crew = () => {
  const mobileBG = 'bg-[url("./assets/crew/background-crew-mobile.jpg")]';
  const tabletBG = 'md:bg-[url("./assets/crew/background-crew-tablet.jpg")]';
  const desktopBG = 'lg:bg-[url("./assets/crew/background-crew-desktop.jpg")]';
  return (
    <div
      className={`${mobileBG} ${tabletBG} ${desktopBG} bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center p-6 gap-8 `}
    >
      <div className='flex flex-col items-center h-[calc(100%-5rem)] justify-between'>
        <p className='uppercase flex gap-2 items-center'>
          <span>02</span>Meet your crew
        </p>
        <MemberCarousel />
      </div>
    </div>
  );
};

export default Crew;
