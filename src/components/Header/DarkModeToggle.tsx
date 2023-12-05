import { MoonIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/contexts/DarkModeContext";

interface DarkModeToggleProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
  }

const DarkModeToggle: React.FC<DarkModeToggleProps> = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none mx-4 transition-all duration-1000"
            onClick={toggleDarkMode}
        >
              {isDarkMode ? (
                <MoonIcon className="w-6 h-6 text-green transition duration-700" />
                ) : (
                <MoonIcon className="w-6 h-6 text-gray-500 transition duration-700" />
            )}
        </button>
    );
};

export default DarkModeToggle;
