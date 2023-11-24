import React from "react"; 
import { useTranslation } from "@/app/i18n"; 
import TextTransition, { presets } from 'react-text-transition';
import useTextRotation from "@/hooks/useTextRotation";

type ProfileSectionProps = {
  lng: string;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ lng }) => {
  
  const { t } = useTranslation(lng, 'translation');
  const pastLives = t ? t('profile.pastlives', { returnObjects: true }) : [];
  const pastLivesText = useTextRotation(pastLives, 1000);

  return (
    <div className="container mx-auto flex justify-center w-full">
      <div className="w-1/4">
        <h2 className="uppercase text-xl">{t ? t ('profile.about', lng):''}</h2>
      </div>
      <div className="w-2/3 flex flex-col justify-between">
        <div>
          <p className="text-5xl text-bold pb-5">{ t ? t('profile.description.first') : '' }</p>
          <p className='text-xl my-5'>{ t ? t('profile.description.second') : '' }</p>
          <p className='text-xl'>{ t ? t('profile.description.third') : '' }
            &nbsp;
            <TextTransition inline springConfig={presets.gentle}>
              { pastLivesText }
            </TextTransition>.
          </p>
        </div>
        <button className="self-start flex justify-center btn-fill-effect border rounded-full text-white py-2 px-6 text-md my-5 uppercase">
          { t ? t ('profile.cv', lng):'' }
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;