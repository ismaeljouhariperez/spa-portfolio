'use client'; 
import React, { useState } from 'react';
const LanguageToggle: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'fr'>('fr');

    const handleEnglishClick = () => {
        setLanguage('en');
    };
    const handleFrenchClick = () => {
        setLanguage('fr');
    };
    return (
        <div>
             <button
                className={`px-4 py-2  ${
                    language === 'fr' ? 'text-white' : 'bg-gray-200 text-gray-700 hover:text-white hover:bg-black transition duration-500'
                }`}
                onClick={handleFrenchClick}
            >
                FR
            </button>
            <button
                className={`px-4 py-2  ${
                    language === 'en' ? 'text-white' : 'bg-gray-200 text-gray-700 hover:text-white hover:bg-black transition duration-500'
                }`}
                onClick={handleEnglishClick}
            >
                EN
            </button>
        </div>
    );
}; export default LanguageToggle;
