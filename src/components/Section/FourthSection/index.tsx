import React from 'react';
import { useTranslation } from '@/app/i18n';

// types.ts
export type SkillsList = {
    name: string;
    technologies: string[];
  };

type SkillsProps = {
    categories: SkillsList[];
    lng: string;
};

const SkillsSection: React.FC<SkillsProps> = ({ categories, lng }) => {
    const { t } = useTranslation(lng, 'translation');
    
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <h2 className="text-2xl font-bold mb-4">
                        {lng === 'fr' ? 'Colonne 1' : 'Column 1'}
                    </h2>
                    <p className="text-gray-700">
                        {lng === 'fr'
                        ? 'Contenu de la colonne 1'
                        : 'Content of column 1'}
                    </p>
                </div>
                <div className="col-span-1">
                    <h2 className="text-2xl font-bold mb-4">
                        {lng === 'fr' ? 'Colonne 2' : 'Column 2'}
                    </h2>
                    <p className="text-gray-700">
                        {lng === 'fr'
                        ? 'Contenu de la colonne 2'
                        : 'Content of column 2'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;


