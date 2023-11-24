export const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

export const darkenColor = (hexColor: string, amount: number) => {
    const rgb = hexToRgb(hexColor);
    if (!rgb) return hexColor;

    const darken = (color: number) => Math.max(color - amount, 0);
    const r = darken(rgb.r);
    const g = darken(rgb.g);
    const b = darken(rgb.b);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};
