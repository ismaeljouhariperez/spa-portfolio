import React, { useState } from 'react';
import ProjectImage from './ProjectImage';
import Link from 'next/link';
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useTranslation } from '@/app/i18n';
import useDeviceDetection from '@/hooks/useDeviceDetection';


type ProjectsSectionProps = {
    lng: string;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lng }) => {
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const device = useDeviceDetection();
    const { t } = useTranslation(lng, 'translation');

    const handleMouseMove = (e: React.MouseEvent, imageName: string) => {
        if (device === 'desktop') {
            setCursorPos({ x: e.clientX, y: e.clientY });
            setHoveredImage(imageName);
        }
    };

    const handleMouseLeave = () => {
        if (device === 'desktop') {
            setHoveredImage(null);
        }
    };

    const projects = [
        { name: 'ismaelphotos', url: 'https://ismael.photos', image: '/projet-5.png' },
        { name: 'webagency', url: 'https://projet-1-oc.ismaelperez.cc', image: '/projet-4.png' },
        { name: 'ville_ireki', url: 'https://drive.google.com/file/d/1KZU9ie8-IYLOPCt37yexFrEqGKXprLxX/view', image: '/projet-2.png' },
        { name: 'bikeluxembourg', url: 'https://projet-3-oc.ismaelperez.cc', image: '/projet-3.png' },
        { name: 'jeanforteroche', url: 'https://drive.google.com/file/d/1WxDu-bajdjOUu9fsz9848B_s6QruOged/view', image: '/projet-1.png' },
    ];

    return (
        <div className="container mx-auto w-full">
            <nav>
                <h2 className="text-md lg:text-xl uppercase flex justify-between mb-6">
                    {t ? t('projects.title', lng) : ''}
                </h2>
                <ul className="menu">
                    {projects.map((project, index) => (
                        <li key={index} 
                            onMouseMove={device === 'desktop' ? (e) => handleMouseMove(e, project.name) : undefined}
                            onMouseLeave={device === 'desktop' ? handleMouseLeave : undefined}
                            className="relative text-l lg:text-2xl xl:text-3xl flex group">
                        <Link href={project.url} className="flex justify-between items-center w-full" passHref>
                            <h3 className="uppercase">{project.name}</h3>
                            <ArrowUpRightIcon className="w-4 h-4 lg:w-8 lg:h-8 text-white-500 transition duration-700"/>
                        </Link>
                        <ProjectImage name={project.name} image={project.image} cursorPos={cursorPos} />
                    </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default ProjectsSection;