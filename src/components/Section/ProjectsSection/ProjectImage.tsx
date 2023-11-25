import React from 'react';
import Image from 'next/image';

interface ImageProps {
    name: string;
    image: string;
    cursorPos: { x: number; y: number };
}

const ProjectImage: React.FC<ImageProps> = ({ name, image, cursorPos }) => {
    if (!image) {
        return null;
    }
    const imageStyle = {
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        transform: 'translate(50%, -50%)',
    };

    return (
        <figure style={imageStyle} className='fixed duration-300 transition opacity-0 group-hover:opacity-100'>
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