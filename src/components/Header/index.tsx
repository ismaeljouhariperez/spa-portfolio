import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import DarkModeToggle from './DarkModeToggle';
import LanguageToggle from './LanguageToggle'; 

interface HeaderProps {
  lng: string;
}

const Header: React.FC<HeaderProps> = ({ lng }) => {
  return (
    <header className="fixed top-0 left-0 w-full text-white z-10 flex justify-between items-center py-4 px-8">
      <Logo />
      <NavLinks lng={lng} />
      <div className="flex items-center">
        <DarkModeToggle  />
        <LanguageToggle currentLanguage={lng} />
      </div>
    </header>
  );
};

export default Header;
 