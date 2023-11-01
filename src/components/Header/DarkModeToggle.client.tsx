"use client";  // This is a client component, so we need to add this line to the top of the file 

import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <button
            className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none mx-4 transition-all duration-500"
            onClick={toggleDarkMode}
        >
            {isDarkMode ? (
                <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
                <MoonIcon className="w-6 h-6 text-gray-500" />
            )}
        </button>
    );
};

export default DarkModeToggle;
