import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import DarkModeToggle from './DarkModeToggle';
import LanguageToggle from './LanguageToggle'; 

interface HeaderProps {
  lng: string;
  isDarkMode: boolean;
  currentSection: number;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ lng, isDarkMode, toggleDarkMode, currentSection }) => {
  return (
    <header className="z-30 fixed top-0 left-0 w-full text-white z-10 flex justify-between items-center py-4 px-8">
      <Logo />
      <NavLinks lng={lng} currentSection={currentSection}/>
      <div className="flex items-center">
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <LanguageToggle currentLanguage={lng} />
      </div>
    </header>
  );
};

export default Header;
 