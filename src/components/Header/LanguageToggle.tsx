'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { languages } from '@/app/i18n/settings';

interface LanguageToggleProps {
  currentLanguage: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage }) => {
  const [language, setLanguage] = useState(currentLanguage);

  const handleLanguageClick = (newLanguage: 'en' | 'fr') => {
    setLanguage(newLanguage);
    // Here you can add logic to update the application's language setting
    // For example, using i18n.changeLanguage(newLanguage) or similar
  };

  return (
    <div className="flex items-center">
      {languages.filter((l) => l !== currentLanguage).map((l) => (
        <span key={l}>
          <Link href={`/${l}`} passHref>
            <button
              className="cta px-4 py-2 text-white"
              onClick={() => handleLanguageClick(l as 'en' | 'fr')}
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
