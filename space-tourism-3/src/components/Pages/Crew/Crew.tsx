import MemberCarousel from './MemberCarousel';

const Crew = () => {
  return (
    <div className='bg-[url("./assets/crew/background-crew-mobile.jpg")] bg-cover bg-no-repeat flex flex-col items-center justify-center p-6 gap-8 h-screen'>
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
