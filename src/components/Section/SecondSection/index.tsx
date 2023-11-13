import React from 'react';
import ProjectImage from './ProjectImage';
import Link from 'next/link';
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const ProjectsSection = () => {
    const projects = [
        { name: 'ismaelphotos', url: '/webagency', image: '/projet-1.png' },
        { name: 'webagency', url: '/webagency', image: '/projet-4.png' },
        { name: 'ville_ireki', url: '/ville_ireki', image: '/projet-2.png' },
        { name: 'bikeluxembourg', url: '/bikeluxembourg', image: '/projet-3.png' },
        { name: 'jeanforteroche', url: '/jeanforteroche', image: '/projet-1.png' },
    ];
    return (
        
        <nav className="w-11/12">
            <h2 className="text-xl uppercase flex justify-between mb-6">Projets récents</h2>
            <ul className="menu">
                {projects.map((project, index) => (
                    <li key={project.name} className={`text-3xl relative flex justify-between items-center group`}>
                        <Link href={project.url} passHref><h3>{project.name}</h3></Link>
                        <Link href={project.url} passHref>
                        <ArrowUpRightIcon className="w-8 h-8 text-white-500 transition duration-700"/>
                        </Link>
                        <ProjectImage name={project.name} image={project.image} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default ProjectsSection;
