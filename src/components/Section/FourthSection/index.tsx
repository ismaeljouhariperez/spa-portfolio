import React from 'react';
import { SkillsList as SkillsListType } from '@/types/types';
import { useTranslation } from '@/app/i18n';

type SkillsListProps = {
    lists: SkillsListType[];
    lng: string;
  };

const SkillsSection: React.FC<SkillsListProps> = ({ lists, lng }) => {
 
    const { t } = useTranslation(lng, 'translation');
    const skillsLists: SkillsListType[] = [
        {
          name: 'Frameworks',
          skills: ['React', 'Laravel', 'Next'],
        },
        {
          name: 'Languages',
          skills: ['PHP', 'Javascript', 'Typescript'],
        },
        {
          name: 'Apps',
          skills: ['Trello', 'Jira', 'Notion'],
        },
        {
          name: 'Projet',
          skills: ['Notion', 'Docker'],
        },

    ];
    return (
        <div className="container mx-auto">
            <div className="flex h-full">
                <div className="w-1/4">
                    <h2 className="uppercase text-xl">Mes compétences</h2>
                </div>
                <div className="w-2/3 flex flex-col justify-between">
                    <ul>
                        {skillsLists.map((list, idx) => (
                        <li key={idx} className="list-none grid grid-cols-2 mb-5">
                            <h3 className="text-lg transition duration-500 ease-in-out transform hover:-translate-y-1">
                            {list.name}
                            </h3>
                            <ul className="grid grid-cols-2 gap-4">
                            {list.skills.map((skill, idx) => (
                                <li
                                key={idx}
                                className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
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
        </div>
    );
};

export default SkillsSection;


