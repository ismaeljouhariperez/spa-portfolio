import React, {ReactElement} from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from '@/app/i18n';

interface Props {
    lng: string;
}

const FirstSection = ({ lng }: Props): ReactElement => {
  const { t, i18n } = useTranslation(lng, 'translation');
  if (!t) {
    return <svg className="animate-spin h-5 w-5 mr-3 bg-white " viewBox="0 0 24 24">    </svg>
    // return <p>Traductions en cours...</p>;
  }
  let h2 = t('section.first.h2', lng);
  return (
    <div className='w-11/12 flex flex-col	'>
      <h2 className="text-7xl text-white-200 my-4 ">
        <TypeAnimation
        sequence={[
          h2,
          1000,
        ]}
        // wrapper={'h2'}
        speed={50}
        // className={ 'text-7xl text-white-200' }
        repeat={Infinity}
      />
    </h2>
      <h2 className="text-7xl text-white-200 my-2">{t('section.first.h3', lng)}</h2>
      <p className="text-2xl text-white-200 my-5 w-11/12	">{t('section.first.p', lng)}</p>
      <a href="mailto:ismael.jouhari@gmail.com" className='inline-flex justify-center'>
        <button className="flex self-center text-white font-normal text-xl py-2 px-2 border-b-2 border-white-200 transition ease-in-out duration-1000 hover:border-black ">
          {t('section.first.btn', lng)}
        </button>
      </a>
      </div>
  );
};

export default FirstSection;
