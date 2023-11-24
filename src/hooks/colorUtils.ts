export const generateColorVariation = (baseColor: { r: number; g: number; b: number }, range: number) => {
    const random = (color: number) => {
      const variation = Math.floor(Math.random() * range) - range / 2;
      return Math.min(Math.max(color + variation, 0), 255);
    };
  
    return {
      r: random(baseColor.r),
      g: random(baseColor.g),
      b: random(baseColor.b),
    };
  };
  
  export const rgbToHex = (rgb: { r: number; g: number; b: number }) => {
    const componentToHex = (color: number) => {
      const hex = color.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
  
    return `#${componentToHex(rgb.r)}${componentToHex(rgb.g)}${componentToHex(rgb.b)}`;
  };
  