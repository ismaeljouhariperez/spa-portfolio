import React from 'react';
import ProjectImage from './ProjectImage';

const ProjectsSection = () => {

    const projects = [
        { name: 'webagency', url: 'http://webagency.example.com', image: '/projet-1.png' },
        { name: 'ville_ireki', url: 'http://villeireki.example.com', image: '/projet-2.png' },
        { name: 'bikeluxembourg', url: 'http://bikeluxembourg.example.com', image: '/projet-3.png' },
        { name: 'jeanforteroche', url: 'http://jeanforteroche.example.com', image: '/projet-4.png' },
    ];

    return (
        <nav className="menu">
            {projects.map((project) => (
                <li className={`relative list-none group menu__item ${project.name}-hover-trigger`} 
                    key={project.name}>
                <a href={project.url}>
                    <h3 className="project-item text-6xl my-5" >{project.name}</h3>
                    <ProjectImage name={project.name} image={project.image} />
                </a>
                </li>
            ))}
        </nav>
    );
};

export default ProjectsSection;
