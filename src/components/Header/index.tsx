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
    <header className="lg:h-16 fixed z-50 top-0 left-0 w-full text-white flex justify-between items-center px-8">
      <Logo navigateToSection={navigateToSection} currentSection={ currentSection } />
      <NavLinks lng={lng} currentSection={currentSection} navigateToSection={navigateToSection}/>
      <div className="flex items-center">
        <DarkModeToggle isDarkMode={false} toggleDarkMode={() => {}} />
        <LanguageToggle currentLanguage={lng} />
      </div>
    </header>
  );
};

export default Header;
 