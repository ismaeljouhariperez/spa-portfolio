'use client'; 

import React from 'react';
import Link from 'next/link';
// import { Trans } from 'react-i18next';
import { languages } from '@/app/i18n/settings';
import { useTranslation } from '@/app/i18n';
import { useState } from 'react';

interface LanguageToggleProps {
  currentLanguage: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage }) => {
  const [language, setLanguage] = useState<'en' | 'fr'>('fr');

    const handleEnglishClick = () => {
        setLanguage('en');
    };
    const handleFrenchClick = () => {
        setLanguage('fr');
    };

  return (
    <div className="flex items-center">
      {/* <Trans i18nKey="languageSwitcher" t={t}>
        {/* Switch from <strong>{currentLanguage}</strong> to:{' '} */}
        {/* <button
          className={`px-4 py-2 text-white'}`}
          onClick={handleFrenchClick}
        >
        {currentLanguage.toUpperCase()}
        </button> */}
      {/* </Trans> */} 
      {languages.filter((l) => currentLanguage !== l).map((l, index) => (
        <span key={l} >
          {/* {index > 0 && ' or '} */}
          <Link href={`/${l}`} passHref>
          <button
                className={`cta cta-active px-4 py-2 text-white'
                }`}
                onClick={handleEnglishClick}
            >
                {l.toUpperCase()}
            </button>
          </Link>
        </span>
      ))}
    </div>
  );
};

export default LanguageToggle;
