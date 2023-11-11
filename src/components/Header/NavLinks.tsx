import { useTranslation } from '@/app/i18n';
import React, { ReactElement } from 'react';

interface NavLinkProps {
    lng: string;
    currentSection?: number;
    navigateToSection: (sectionId: string) => void;
  }

  const NavLinks = ({ lng, currentSection, navigateToSection }: NavLinkProps): ReactElement => {
    const { t, i18n } = useTranslation(lng, 'translation');
    if (!t) {
      return <svg className="animate-spin h-5 w-5 mr-3 bg-white " viewBox="0 0 24 24"></svg>
    }
    // Handler function for click events on navigation links
    const handleClick = (sectionId, e) => {
    e.preventDefault(); // Prevent the default anchor action
    navigateToSection(sectionId); // Navigate to the section
    console.log('current :', currentSection);
  };
    
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li className="px-4 text-lg">
          <a onClick={(e) => handleClick('section-2', e)} href="#section-2" className={`hover-underline-animation ${currentSection === 2 ? 'underline-animation' : ''}`}>
            {t('nav.projects')}
            </a>
        </li>
        <li className="px-4 text-lg">
          <a onClick={(e) => handleClick('section-3', e)} href="#section-3" className={`hover-underline-animation ${currentSection === 3 ? 'underline-animation' : ''}`}>
            {t('nav.clients', lng)}
          </a>
        </li>
        <li className="px-4 text-lg">
          <a onClick={(e) => handleClick('section-4', e)} href="#section-4" className={`hover-underline-animation ${currentSection === 4 ? 'underline-animation' : ''}`}>
            {t('nav.profile')}
          </a>
        </li>
        <li className="px-4 text-lg">
          <a onClick={(e) => handleClick('section-id', e)} href="#section-5" className={`hover-underline-animation ${currentSection === 5 ? 'underline-animation' : ''}`}>
            {t('nav.contact')}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
