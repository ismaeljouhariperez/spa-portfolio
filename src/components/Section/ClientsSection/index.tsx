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
        { name: 'Alya', description:'Deep learning', url: 'https://www.alya.ai/' },
        { name: 'Index Montreal', description:'Web design', url: 'https://www.indexwebmarketing.com/' },
        { name: 'Unixperience', description:'Wordpress', url: 'https://www.racketlon.ca/about-racketlon/#item-6' },
        { name: 'Delastek', description:'Intranet', url: 'https://www.columbiasportswear.fr/' },
        { name: 'Columbia Sportswear', description:'Social Listening', url: '/clients/columbia' },
        { name: 'Firmenich', description:'Data analysis', url: 'https://www.firmenich.com/' },
        { name: 'Pierre Fabre', description:'Crisis management', url: 'https://www.pierre-fabre.com/fr-fr' },
    ];

    return (
        <ColorGenerator count={clients.length}>
            {({ normalColors, darkModeColors }) => (
                <div className="container mx-auto w-full h-full flex flex-col justify-center items-center">
                     <h2 className="text-l lg:text-xl uppercase my-4">
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
                                        <h3 className="uppercase text-3xl lg:text-5xl">{client.name}</h3>
                                    </Link>
                                    <em className={ `text-xl absolute bottom-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 ease-in-out ${ index % 2 === 0 ? 'right-0' : 'left-0' } `}>
                                        {client.description}
                                    </em>
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