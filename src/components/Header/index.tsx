import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import DarkModeToggle from './DarkModeToggle';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full text-white z-10 flex justify-between items-center py-4 px-8">
      <Logo />
      <NavLinks />
      <div className="flex items-center">
        <DarkModeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header;
