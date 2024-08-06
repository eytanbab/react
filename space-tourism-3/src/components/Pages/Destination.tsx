import Moon from '../../assets/destination/image-moon.webp';
import Divider from '../shared/Divider';

const Destination = () => {
  return (
    <div className='bg-[url("./assets/destination/background-destination-mobile.jpg")] bg-cover bg-no-repeat absolute inset-0  flex flex-col items-center justify-center -z-10 p-6 gap-8'>
      <p className='uppercase flex gap-2'>
        <span>01</span>Pick your destination
      </p>
      <img src={Moon} alt='' className='h-40 w-40' />
      <ul className='uppercase flex gap-8 items-center'>
        <li>Moon</li>
        <li>Mars</li>
        <li>Europa</li>
        <li>Titan</li>
      </ul>
      <section id='content' className='flex flex-col text-center gap-8'>
        <h1 className='uppercase text-4xl'>Moon</h1>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        <Divider />
        <section className='text-center flex flex-col gap-8'>
          <div>
            <p className='uppercase'>Avg. distance</p>
            <p className='text-xl'>384,400 KM</p>
          </div>
          <div>
            <p className='uppercase'>EST. travel time</p>
            <p className='text-xl'>3 days</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Destination;
