import React from 'react';
import ProjectImage from './ProjectImage';
import Link from 'next/link';

const ProjectsSection = () => {
    const projects = [
        { name: 'webagency', url: '/webagency', image: '/projet-4.png' },
        { name: 'ville_ireki', url: '/ville_ireki', image: '/projet-2.png' },
        { name: 'bikeluxembourg', url: '/bikeluxembourg', image: '/projet-3.png' },
        { name: 'jeanforteroche', url: '/jeanforteroche', image: '/projet-1.png' },
    ];
    return (
        <nav>
            <ul className="menu">
                {projects.map((project, index) => (
                    <li key={project.name} className={`text-6xl relative flex group my-5`}>
                        <Link href={project.url} passHref>
                            <h3 className={`relative menu__item menu__item-${index} menu__item--showDeco bg-gradient-${project.name}`}>{project.name}</h3>
                        </Link>
                        <ProjectImage name={project.name} image={project.image} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default ProjectsSection;
