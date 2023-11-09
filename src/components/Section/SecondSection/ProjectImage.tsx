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
        <figure className={`absolute hidden group-hover:block ${name}-hover-target top-0`}>
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