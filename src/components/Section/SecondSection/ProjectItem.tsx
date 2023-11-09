import React from 'react';

interface ProjectItemProps {
    name: string;
    description: string;
    image: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name }) => {
    return (
        <h3 className="project-item text-3xl" >{name}</h3>
    );
};

export default ProjectItem;
