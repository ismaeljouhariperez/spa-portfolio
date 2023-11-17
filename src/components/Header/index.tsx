import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import LanguageToggle from './LanguageToggle'; 
import DarkModeToggle from './DarkModeToggle';

interface HeaderProps {
  lng: string;
  currentSection: number;
  navigateToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ lng, currentSection, navigateToSection }) => {
  return (
    <header className="z-30 fixed top-0 left-0 w-full text-white z-10 flex justify-between items-center py-4 px-8">
      <Logo currentSection={ currentSection } />
      <NavLinks lng={lng} currentSection={currentSection} navigateToSection={navigateToSection}/>
      <div className="flex items-center">
        <DarkModeToggle isDarkMode={false} toggleDarkMode={() => {}} />
        <LanguageToggle currentLanguage={lng} />
      </div>
    </header>
  );
};

export default Header;
 