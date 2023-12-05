import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from '@/app/i18n';

interface Props {
  lng: string;
} 

const FirstSection: React.FC<Props> = ({ lng }) => {

  const { t } = useTranslation(lng, 'translation');
  if (!t) {
    return <svg className="animate-spin h-5 w-5 mr-3 bg-white " viewBox="0 0 24 24"></svg>
  }
  let h2 = t('section.first.h2', lng);
  
  return (
    <div className="flex flex-col justify-between h-1/2">
      <div>
        <h2 className="text-4xl lg:text-7xl text-white-200 my-4 ">
          <TypeAnimation
          sequence={[
            h2,
            1000,
          ]}
          speed={50}
          />
        </h2>
        <h2 className="text-4xl lg:text-7xl text-white-200 my-2">{t('section.first.h3', lng)}</h2>
        <p className="text-l lg:text-2xl text-white-200 my-5 w-3/4">{t('section.first.p', lng)}</p>
      </div>
      <div>
        <a href="mailto:ismael.jouhari@gmail.com" className='inline-flex'>
          <button className="btn-fill-effect slide-effect  text-sm lg:text-md uppercase border rounded-full text-white py-2 px-6  ">
            {t('section.first.btn', lng)}
          </button>
        </a>
      </div>
    </div>
  );
};

export default FirstSection;
