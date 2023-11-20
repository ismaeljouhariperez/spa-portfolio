import Image from 'next/image'
import React from 'react';

interface LogoProps {
  currentSection?: number;
  navigateToSection: (sectionId: string) => void;
}

const Logo: React.FC<LogoProps> = ({ currentSection, navigateToSection }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigateToSection('section-1', true);
  };

  return (
      <div>
       <Image 
          className={`relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:white logo ${currentSection === 1 ? 'logo-active' : ''}`}
          src="/IJ.svg"
          alt="Ismael Logo"
          width={30}
          height={30}
          onClick={handleClick}
          priority
        />
      </div>
    );
  }
  
  export default Logo;
  