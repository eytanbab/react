import React from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
        filter: isInView ? 'none' : 'blur(30px)',
      }}
      className='flex grow flex-col gap-4  px-6 text-center text-lg leading-relaxed md:text-2xl xl:max-w-5xl'
    >
      <p>
        Hey! my name is Ethan Babaev, and I am a 27-year-old software
        engineering graduate from Sami Shamoon College of Engineering.
      </p>
      <p>
        As a recent graduate, I am excited to start my career in the field of
        frontend development. Though I don't have any professional experience
        yet, I have been honing my skills in coding and design through various
        personal projects and coursework. I am proficient in HTML, CSS,
        JavaScript, and React and have a keen eye for detail and aesthetics.
      </p>
      <p>
        I am also a quick learner and thrive in collaborative environments. I am
        currently seeking opportunities to work as a frontend developer and
        contribute to innovative projects.
      </p>
      <p>
        I am confident that my skills and passion for coding make me a valuable
        addition to any team. Thank you for visiting my portfolio, and I look
        forward to connecting with you.
      </p>
    </div>
  );
};

export default About;
