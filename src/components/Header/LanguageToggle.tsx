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
  };

  return (
    <div className="flex items-center">
      {languages.filter((l) => l !== currentLanguage).map((l) => (
          <Link href={`/${l}`} key={l} passHref>
            <button
              className="cta px-4 py-2 text-white"
              onClick={() => handleLanguageClick(l as 'en' | 'fr')}
            >
              {l.toUpperCase()}
            </button>
          </Link>
      ))}
    </div>
  );
};

export default LanguageToggle;
