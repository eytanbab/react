import { useState } from 'react';
import Person from './Person';
import AnsariImg from '../../assets/crew/image-anousheh-ansari.png';
import HurleyImg from '../../assets/crew/image-douglas-hurley.png';
import MarkImg from '../../assets/crew/image-mark-shuttleworth.png';
import GloverImg from '../../assets/crew/image-victor-glover.png';

function Crew({ data }) {
  const [person, setPerson] = useState(0);
  const [img, setImg] = useState(HurleyImg);
  console.log(data[person]);

  return (
    <div className='page flex flex-col items-start justify-center bg-crew-desktop px-96'>
      <Person data={data[person]} Img={img} />
      <div className='flex gap-12 py-10'>
        <button
          onClick={() => {
            setPerson(0);
            setImg(HurleyImg);
          }}
          className='h-6 w-6 rounded-full bg-gray-500 focus:bg-white'
        />
        <button
          onClick={() => {
            setPerson(1);
            setImg(MarkImg);
          }}
          className='h-6 w-6 rounded-full bg-gray-500 focus:bg-white'
        />
        <button
          onClick={() => {
            setPerson(2);
            setImg(GloverImg);
          }}
          className='h-6 w-6 rounded-full bg-gray-500 focus:bg-white'
        />
        <button
          onClick={() => {
            setPerson(3);
            setImg(AnsariImg);
          }}
          className='h-6 w-6 rounded-full bg-gray-500 focus:bg-white'
        />
      </div>
    </div>
  );
}

export default Crew;
