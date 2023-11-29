import React from 'react';
import { useTranslation } from '@/app/i18n';

type SkillsListProps = {
    lng: string;
};

const SkillsSection: React.FC<SkillsListProps> = ({ lng }) => {
 
    const { t } = useTranslation(lng, 'translation');
    const skillsLists = t ? t('skills.list', { returnObjects: true }) : [];

    return (
        <div className="container mx-auto flex justify-center w-full">
            <div className="hidden lg:flex lg:w-1/4">
                <h2 className="uppercase text-l xl:text-xl">
                    {t ? t ('skills.title', lng):''}
                </h2>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col justify-between">
                <ul>
                    {skillsLists.map( (list, index) => (
                    <li key={index} className= {` list-none grid grid-cols-2 gap-4 lg-gap-2 mb-4 ${index > 0 ? 'border-t-1	pt-4' : '' } `}>
                        <h3 className="uppercase text-lg transition duration-500 ease-in-out transform hover:-translate-y-1">
                        {list.name}
                        </h3>
                        <ul className="grid grid-cols-2 gap-4">
                        {list.skills.map((skill, index) => (
                            <li
                            key={index}
                            className= {`transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
                            >
                            {skill}
                            </li>
                        ))}
                        </ul>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillsSection;


