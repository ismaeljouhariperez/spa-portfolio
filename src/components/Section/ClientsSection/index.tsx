import React, { useState } from 'react';
import { useTranslation } from '@/app/i18n';
import ColorGenerator from '@/hooks/ColorGenerator';
import { useDarkMode } from '@/contexts/DarkModeContext';
import Link from 'next/link';

const ClientsSection: React.FC<{ lng: string }> = ({ lng }) => {
    const [hoveredClient, setHoveredClient] = useState<string | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { isDarkMode } = useDarkMode();

    const { t } = useTranslation(lng, 'translation');

    const clients = [
        { name: 'Racketlon', description:'Web design', url: '/clients/racketlon' },
        { name: 'Columbia Sportswear', description:'Intranet', url: '/clients/columbia' },
        { name: 'Pierre Fabre', description:'Social listening', url: '/clients/pierre-fabre' },
        { name: 'Index Web Agency', description:'Web design', url: '/clients/index' },
        { name: 'Groupe Santé IPA', description:'Intranet', url: '/clients/ipa' },
        { name: 'Test', description:'Intranet', url: '/clients/ipa' },
        { name: 'dernier test', description:'Intranet', url: '/clients/ipa' },
    ];

    // const { t } = useTranslation(lng, 'translation');

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
                                    className={`relative w-full text-center my-2 transition-opacity group duration-700
                                    ${hoveredClient && hoveredClient !== client.name ? 'opacity-50' : 'opacity-100'}`} >
                                    <Link href={client.url} >
                                        <h3 className="uppercase text-5xl">{client.name}</h3>
                                    </Link>
                                    <em className={ `text-xl absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out ${ index % 2 === 0 ? 'right-0' : 'left-0' } `}>{client.description}</em>
                                    {/* <em className="text-2xl absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">{client.description}</em> */}
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