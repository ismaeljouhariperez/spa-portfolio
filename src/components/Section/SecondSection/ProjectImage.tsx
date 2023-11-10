import React from 'react';
import Image from 'next/image';

interface ImageProps {
    name : string;
    image : string;
}

const ProjectImage: React.FC<ImageProps> = ({name, image }) => {
    if (!image) {
        return null;
    }

    return (
        <figure className={`absolute transition duration-500 transition-opacity opacity-0 group-hover:opacity-100 ${name}-hover-target`}>
            <Image 
                src={image} 
                alt={name} 
                width='300'
                height='300'
                />
        </figure>
    );
}

export default ProjectImage;