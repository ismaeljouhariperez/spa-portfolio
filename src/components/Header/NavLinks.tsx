import { useTranslation } from '@/app/i18n';
import React from "react";

interface NavLinkProps {
  lng: string;
  currentSection?: number;
  navigateToSection: (sectionId: string) => void;
}

const NavLinks: React.FC<NavLinkProps> = async ({ lng, currentSection, navigateToSection }) => {
  const { t } = await useTranslation(lng)

  if (!t) {
    return <svg className="animate-spin h-5 w-5 mr-3  " viewBox="0 0 24 24"></svg>
  }

  const sections = [
    { id: 'section-2', label: 'nav.clients' },
    { id: 'section-3', label: 'nav.projects' },
    { id: 'section-4', label: 'nav.profile' },
    { id: 'section-5', label: 'nav.skills'},
    { id: 'section-6', label: 'nav.contact' },
  ];

  const handleClick = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToSection(sectionId); 
  };

  return (
    <>
      <nav className="hidden lg:flex">
        <ul className="flex flex-row justify-between items-center">
          {sections.map(({ id, label }) => (
            <li key={id} className="mx-4 my-2 md:my-0">
              <a onClick={handleClick(id)} href={`#${id}`}>
                <button className={`cta px-4 py-2 text-sm lg:text-md ${currentSection === parseInt(id.split('-')[1]) ? 'cta-active' : ''}`}>
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
