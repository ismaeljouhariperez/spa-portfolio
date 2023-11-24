import React from 'react';
import { generateColorVariation, rgbToHex } from './colorUtils';

const ColorGenerator: React.FC<{ count: number, children: (colors: { normalColors: string[], darkModeColors: string[] }) => React.ReactNode }> = ({ count, children }) => {
  // Case colors for normal and dark mode
  const baseNormalColor = { r: 138, g: 177, b: 153 }; // Greenish color
  const baseDarkColor = { r: 30, g: 30, b: 30 }; // Dark gray as a starting point for dark mode

  // For normal mode : a small range to stay around green
  const normalColors = Array.from({ length: count }, () => rgbToHex(generateColorVariation(baseNormalColor, 20)));
  const darkModeColors = Array.from({ length: count }, () => rgbToHex(generateColorVariation(baseDarkColor, 20)));

  // A larger range and higher base to ensure colors are visible
//   const darkModeColors = Array.from({ length: count }, () => rgbToHex(generateColorVariation(baseDarkColor, 50)));

  return <>{children({ normalColors, darkModeColors })}</>;
};

export default ColorGenerator;
