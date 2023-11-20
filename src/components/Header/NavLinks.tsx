import { useTranslation } from '@/app/i18n';
import React from "react";

interface NavLinkProps {
  lng: string;
  currentSection?: number;
  navigateToSection: (sectionId: string) => void;
}

const NavLinks: React.FC<NavLinkProps> = ({ lng, currentSection, navigateToSection }) => {
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
  };

  return (
    <>
      <nav className="hidden lg:flex">
        <ul className="flex flex-row justify-between items-center">
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
