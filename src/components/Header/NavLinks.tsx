import { useTranslation } from '@/app/i18n';
import React, { ReactElement } from 'react';

interface NavLinkProps {
    lng: string;
  }

  const NavLinks = ({ lng }: NavLinkProps): ReactElement => {
    const { t, i18n } = useTranslation(lng, 'translation');
    if (!t) {
      return <p>Traductions en cours...</p>;
    }
    
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li className="px-4 text-lg"><a href="#description" className="hover-underline-animation">
            {t('nav.clients')}</a></li>
        <li className="px-4 text-lg"><a href="#projects" className="hover-underline-animation">
            {t('nav.projects', lng)}</a></li>
        <li className="px-4 text-lg"><a href="#profile" className="hover-underline-animation">
            {t('nav.profile')}</a></li>
        <li className="px-4 text-lg"><a href="#contact" className="hover-underline-animation">
            {t('nav.contact')}</a></li>
      </ul>
    </nav>
  );
}

export default NavLinks;
