/* eslint-disable react-hooks/exhaustive-deps */
'use client' ;

import React, { useState, useEffect } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import getRandomNumber from '@/utils/getRandomNumber';
import { useTranslation } from "@/app/i18n"; 

type ProfileSectionProps = {
  lng: string;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ lng }) => {
   // Initialize state here
   const [textIndex, setTextIndex] = useState(0);
   const { t } = useTranslation(lng, 'translation');
  //  const about = t ? t('profile.about', { returnObjects: true }) : [];
  //  const resume = t ? t('profile.cv', { returnObjects: true }) : [];
   const pastLives = t ? t('profile.pastlives', { returnObjects: true }) : [];
 
   // Effect for setting the random text index
   useEffect(() => {
     const interval = setInterval(() => {
       setTextIndex(getRandomNumber(0, pastLives.length - 1)); // "- 1" is important to stay within array bounds
     }, 1000);
 
     return () => {
       clearInterval(interval);
     };
   }, [pastLives]);
 
   // Early return if texts is not an array or translation function is not available
   if (!Array.isArray(pastLives) || !t) {
     return ''; // Return a loading state or null
   }

  return (
    <div className="container mx-auto w-screen h-60">
      <div className="flex h-full">
        <div className="w-1/4">
          <h2 className="uppercase text-xl">{t('profile.about', lng)}</h2>
        </div>
        <div className="w-2/3 flex flex-col justify-between">
          <div>
            <p className="text-5xl text-bold pb-5">Je m'appelle Ismaël et j'ai déjà plus de trente ans d'expérience dans ce grand torrent vers l'abîme que l'on appelle la vie.</p>
            <p className='text-xl my-5'>Passionné de syntaxes, écrites et orales, littéraires ou informatiques, j'ai passé plus de 3 ans en agence avant de me reconvertir en tant que développeur. Désormais je vois la vie en vert et noir, un peu comme dans Matrix.</p>
            <p className='text-xl'>Dans des vies antérieures, j'ai été
            <ReactTextTransition
          springConfig={presets.gentle}
          className="big"
          inline
        >&nbsp;{pastLives[textIndex]}</ReactTextTransition>
      .
      </p>
          </div>
          <button className="w-1/5 flex justify-center cta cta-active text-white py-2 px-6 hover:border-3 text-sm ">
            Mon CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;