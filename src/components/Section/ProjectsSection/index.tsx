import React from 'react';
import ProjectImage from './ProjectImage';
import Link from 'next/link';
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useTranslation } from '@/app/i18n';

type ProjectsSectionProps = {
    lng : string;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lng }) => {
    const projects = [
        { name: 'ismaelphotos', url: 'https://ismael.photos', image: '/projet-1.png' },
        { name: 'webagency', url: '/webagency', image: '/projet-4.png' },
        { name: 'ville_ireki', url: '/ville_ireki', image: '/projet-2.png' },
        { name: 'bikeluxembourg', url: '/bikeluxembourg', image: '/projet-3.png' },
        { name: 'jeanforteroche', url: '/jeanforteroche', image: '/projet-1.png' },
    ];
    const { t } = useTranslation(lng, 'translation');
    return (
        <div className="container mx-auto w-full">
            <nav>
                <h2 className="text-xl uppercase flex justify-between mb-6">
                    { t ? t ('projects.title', lng):'' }
                </h2>
                <ul className="menu">
                    {projects.map((project, index) => (
                        <li key={project.name} className={`text-3xl relative flex group`}>
                            <Link href={project.url} className="flex justify-between items-center w-full" passHref>
                                <h3 className="uppercase">{project.name}</h3>
                                <ArrowUpRightIcon className="w-8 h-8 text-white-500 transition duration-700"/>
                            </Link>
                            <ProjectImage name={project.name} image={project.image} />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default ProjectsSection;
