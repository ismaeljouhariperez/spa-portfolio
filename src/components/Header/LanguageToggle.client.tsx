"use client"; 
import React, { useState } from 'react';

const LanguageToggle: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'fr'>('en');

    const handleEnglishClick = () => {
        setLanguage('en');
    };

    const handleFrenchClick = () => {
        setLanguage('fr');
    };

    return (
        <div>
            <button
                className={`px-4 py-2 rounded-l-md ${
                    language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={handleEnglishClick}
            >
                EN
            </button>
            <button
                className={`px-4 py-2 rounded-r-md ${
                    language === 'fr' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={handleFrenchClick}
            >
                FR
            </button>
        </div>
    );
};

export default LanguageToggle;
