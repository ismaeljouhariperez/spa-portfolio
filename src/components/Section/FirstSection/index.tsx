import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface Props {
  params: {
    lng: string;
  };
}

const FirstSection: React.FC<Props> = ({ params : lng }) => {
  console.log(lng)
  return (
    <div className='w-11/12 flex flex-col	'>
      <h2 className="text-7xl text-white-200 my-4 ">
        <TypeAnimation
        sequence={[
          'Bonjour, je m\'appelle Ismaël.',
          1000,
        ]}
        // wrapper={'h2'}
        speed={50}
        // className={ 'text-7xl text-white-200' }
        repeat={Infinity}
      />
    </h2>
      <h2 className="text-7xl text-white-200 my-2">
        Développeur Web (et photographe).
      </h2>
      <p className="text-2xl text-white-200 my-5 w-11/12	">
        Je me forme actuellement sur Next, Laravel, Typescript et React et je suis à la recherche d'une opportunité à durée indéterminée.
      </p>
      <button className="flex self-center text-white font-normal text-xl py-2 px-2 border-b-2 border-white-200 transition ease-in-out duration-1000 hover:border-black ">
        Me contacter
      </button>
      </div>
  );
};

export default FirstSection;
