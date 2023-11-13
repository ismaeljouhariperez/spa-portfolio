import React from 'react';
import { useTranslation } from '@/app/i18n';

type ProfileSectionProps = {
  lng: string;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ lng }) => {
        const { t } = useTranslation(lng, 'translation');
        if (!t) {
                return '';
        }
    return (
        <div className="container mx-auto w-screen h-60">
            <div className="flex h-full">
                <div className="w-1/4">
                    <h2 className="uppercase text-xl">À propos de moi</h2>
                </div>
                <div className="w-2/3 flex flex-col justify-between">
                    <div>
                        <p className="text-5xl text-bold pb-5">Je m'appelle Ismaël et j'ai déjà plus de trente ans d'expérience dans ce grand torrent vers l'abîme que l'on appelle la vie.</p>
                        <p className='text-xl my-5'>Passionné de syntaxes, écrites et orales, littéraires ou informatiques, j'ai passé plus de 3 ans en agence avant de me reconvertir en tant que développeur. Désormais je vois la vie en vert et noir, un peu comme dans Matrix.</p>
                        <p className='text-xl'>Dans des vies antérieures, j'ai été étudiant, 3 fois stagiaire (mais c'était bien), marketeux, co-manager (ils et elles étaient 6).</p>
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
