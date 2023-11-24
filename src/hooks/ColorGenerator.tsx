import React from 'react';
import { darkenColor } from './colorUtils';

const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const ColorGenerator: React.FC<{ count: number, children: (colors: { normalColors: string[], darkModeColors: string[] }) => React.ReactNode }> = ({ count, children }) => {
    const normalColors = Array.from({ length: count }, generateRandomColor);
    const darkModeColors = normalColors.map(color => darkenColor(color, 50)); // Darken by an amount of 50

    return <>{children({ normalColors, darkModeColors })}</>;
};

export default ColorGenerator;
