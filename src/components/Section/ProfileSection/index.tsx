import React from "react"; 
import { useTranslation } from "@/app/i18n"; 
import TextTransition, { presets } from 'react-text-transition';
import useTextRotation from "@/hooks/useTextRotation";
import Link from "next/link";

type ProfileSectionProps = {
  lng: string;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ lng }) => {
  
  const { t } = useTranslation(lng, 'translation');
  const pastLives = t ? t('profile.pastlives', { returnObjects: true }) : [];
  const pastLivesText = useTextRotation(pastLives as string[], 2000);

  return (
    <div className="container mx-auto flex justify-center w-full">
      <div className="hidden lg:flex lg:w-1/4">
        <h2 className="uppercase text-l xl:text-xl">{t ? t ('profile.about', lng):''}</h2>
      </div>
      <div className="w-full lg:w-2/3 flex flex-col justify-between">
        <div>
          <p className="text-2xl lg:text-4xl xl:text-5xl text-bold pb-5">{ t ? t('profile.description.first') : '' }</p>
          <p className='text-l xl:text-xl my-5'>{ t ? t('profile.description.second') : '' }</p>
          <p className='text-l xl:text-xl'>{ t ? t('profile.description.third') : '' }
            &nbsp;
            <TextTransition inline springConfig={presets.gentle}>
              { pastLivesText }
            </TextTransition>.
          </p>
        </div>
        <Link 
            href="https://www.linkedin.com/in/ismael-jhri/" 
            target="_blank" 
            rel="noopener noreferrer"
            passHref
        >
          <button className="self-start flex justify-center btn-fill-effect border rounded-full text-white py-2 px-6 text-sm lg:text-md my-5 uppercase">
            { t ? t ('profile.cv', lng):'' }
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileSection;