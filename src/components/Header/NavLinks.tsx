
import { useTranslation } from '@/app/i18n';
import React, { useState } from 'react';
import { MoonIcon } from "@heroicons/react/24/solid";

interface NavLinkProps {
  lng: string;
  currentSection?: number;
  navigateToSection: (sectionId: string) => void;
}

const NavLinks: React.FC<NavLinkProps> = ({ lng, currentSection, navigateToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(lng, 'translation');

  if (!t) {
    return <svg className="animate-spin h-5 w-5 mr-3 bg-white " viewBox="0 0 24 24"></svg>
  }

  const sections = [
    { id: 'section-2', label: 'nav.projects' },
    { id: 'section-3', label: 'nav.clients' },
    { id: 'section-4', label: 'nav.profile' },
    { id: 'section-5', label: 'nav.contact' },
  ];

  const handleClick = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToSection(sectionId, true); 
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? <MoonIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
      </div>
      <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row justify-between items-center">
          {sections.map(({ id, label }) => (
            <li key={id} className="mx-4 my-2 md:my-0">
              <a onClick={handleClick(id)} href={`#${id}`}>
                <button className={`cta px-4 py-2 text-sm ${currentSection === parseInt(id.split('-')[1]) ? 'cta-active' : ''}`}>
                  {t(label)}
                </button>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavLinks;
