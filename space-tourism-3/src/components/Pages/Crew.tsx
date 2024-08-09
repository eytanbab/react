// import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { crew } from '../../data.json';
import ImageCarousel from '../shared/ImageCarousel';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

const Crew = () => {
  // const [selectedCrew, setSelectedCrew] = useState(crew[0]);
  return (
    <div className='bg-[url("./assets/crew/background-crew-mobile.jpg")] bg-cover bg-no-repeat flex flex-col items-center justify-end p-6 gap-8 h-screen'>
      <p className='uppercase flex gap-2'>
        <span>02</span>Meet your crew
      </p>

      <Swiper pagination={true} modules={[Pagination]} className=''>
        {crew.map((member) => {
          return (
            <SwiperSlide key={member.name} className='h-fit'>
              <p className='text-3xl'>{member.role}</p>
              <p className='text-xl'>{member.name}</p>
              <p className='flex-1'>{member.bio}</p>
              <img
                src={member.images.webp}
                alt={member.name}
                className='max-w-60 justify-self-end'
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Crew;
