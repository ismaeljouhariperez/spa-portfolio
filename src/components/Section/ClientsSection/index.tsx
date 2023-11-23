import React, { useState } from 'react';
// import Link from 'next/link';
import { useTranslation } from '@/app/i18n';

type ClientsSectionProps = {
    lng : string;
};

const ClientsSection: React.FC<ClientsSectionProps> = ({ lng }) => {

    const [hoveredClient, setHoveredClient] = useState<string | null>(null);

    const clients = [
        { name: 'Racketlon', description:'Agence de communication' },
        { name: 'Columbia', description:'Agence de communication' },
        { name: 'Pierre Fabre', description:'Lorem ipsum dolor sit' },
        { name: 'BNP Paribas', description:'Lorem ipsum dolor sit' },
        { name: 'L\'Oréal', description:'Lorem ipsum dolor sit' },
    ];

    const { t } = useTranslation(lng, 'translation');

    return (
        <div className="container mx-auto flex w-full h-4/6">
            <div className="w-1/4">
                <h2 className="text-xl uppercase mb-6">
                    {t ? t('clients.title', lng) : ''}
                </h2>
            </div>
            <div className="w-2/3 flex items-center">
                <nav className="w-full">
                    <ul className="w-full">
                    {clients.map((client, index) => (
                        <li 
                        key={index}
                        onMouseEnter={() => setHoveredClient(client.name)}
                        onMouseLeave={() => setHoveredClient(null)}
                        className={`text-6xl my-2 transition-all duration-700
                                    ${hoveredClient && hoveredClient !== client.name ? 'opacity-50' : 'opacity-100'}`}
                        >
                            <h3 className={`text-blur-out uppercase transition-all duration-700 hover:pl-2`}>
                                {client.name}
                            </h3>
                        </li>
                    ))}
                </ul>
                </nav>
            </div>
        </div>
    );
};

export default ClientsSection;