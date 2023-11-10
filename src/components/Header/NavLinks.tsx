import { useTranslation } from '@/app/i18n';
import React, { ReactElement } from 'react';

interface NavLinkProps {
    lng: string;
  }

  const NavLinks = ({ lng }: NavLinkProps): ReactElement => {
    const { t, i18n } = useTranslation(lng, 'translation');
    if (!t) {
      return <svg className="animate-spin h-5 w-5 mr-3 bg-white " viewBox="0 0 24 24"></svg>
      // return <p>Traductions en cours...</p>;
    }
    
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li className="px-4 text-lg"><a href="#description" className="hover-underline-animation">
            {t('nav.projects')}</a></li>
        <li className="px-4 text-lg"><a href="#projects" className="hover-underline-animation">
            {t('nav.clients', lng)}</a></li>
        <li className="px-4 text-lg"><a href="#profile" className="hover-underline-animation">
            {t('nav.profile')}</a></li>
        <li className="px-4 text-lg"><a href="#contact" className="hover-underline-animation">
            {t('nav.contact')}</a></li>
      </ul>
    </nav>
  );
}

export default NavLinks;
