"use client";  // This is a client component
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

interface DarkModeToggleProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
  }

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode);
    //     document.documentElement.classList.toggle("dark");
    //     document.body.classList.toggle("dark");
    // };

    return (
        <button
            className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none mx-4 transition-all duration-1000"
            onClick={toggleDarkMode}
        >
              {isDarkMode ? (
                <MoonIcon className="w-6 h-6 text-yellow-500 transition duration-700" />
                ) : (
                <MoonIcon className="w-6 h-6 text-gray-500 transition duration-700" />
            )}
            {/* {isDarkMode ? (
                <SunIcon className="w-6 h-6 text-yellow-500 hover:text-gray-500 transition duration-700" />
            ) : (
                <MoonIcon className="w-6 h-6 text-gray-500 hover:text-yellow-500 transition duration-700" />
            )} */}
        </button>
    );
};

export default DarkModeToggle;
