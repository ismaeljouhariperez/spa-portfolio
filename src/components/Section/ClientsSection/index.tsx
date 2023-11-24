import React, { useState, useContext } from 'react';
import { useTranslation } from '@/app/i18n';
import ColorGenerator from '@/hooks/ColorGenerator';
import { useDarkMode } from '@/contexts/DarkModeContext';

const ClientsSection: React.FC<{ lng: string }> = ({ lng }) => {
    const [hoveredClient, setHoveredClient] = useState<string | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { isDarkMode } = useDarkMode();

    const clients = [
        { name: 'Racketlon', task:'Lorem ipsum texte de test ', description:'Web design' },
        { name: 'Columbia', task:'Lorem ipsum texte de test', description:'Intranet' },
        { name: 'Pierre Fabre', task:'Lorem ipsum texte de test', description:'Social listening' },
        { name: 'Index', task:'Lorem ipsum texte de test', description:'Web design' },
        { name: 'IPA', task:'Lorem ipsum texte de test', description:'Intranet' },
    ];

    const { t } = useTranslation(lng, 'translation');

    return (
        <ColorGenerator count={clients.length}>
            {({ normalColors, darkModeColors }) => (
                <div className="container mx-auto w-full h-full flex flex-col justify-center items-center">
                     <h2 className="text-xl uppercase my-4">
                        {t ? t('clients.title', lng) : ''}
                    </h2>
                    <nav className="w-full">
                        <ul>
                            {clients.map((client, index) => (
                                <li 
                                    key={index}
                                    onMouseEnter={() => {
                                        setHoveredClient(client.name)
                                        setHoveredIndex(index);
                                        document.body.style.backgroundColor = isDarkMode ? darkModeColors[index] : normalColors[index];
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredIndex(null);
                                        setHoveredClient(null);
                                        document.body.style.backgroundColor = '';
                                    }}
                                    className={`relative w-full text-center text-5xl my-2 transition-opacity group duration-300
                                    ${hoveredClient && hoveredClient !== client.name ? 'opacity-50' : 'opacity-100'}`} >
                                    <h3 className="uppercase transition-all duration-700 text-6xl hover:cursor-pointer">{client.name}</h3>
                                    <em className="text-2xl absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition duration">{client.task}</em>
                                    <em className="text-2xl absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition duration">{client.description}</em>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </ColorGenerator>
    );
};

export default ClientsSection;