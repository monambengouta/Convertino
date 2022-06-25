/**
 * convert colors
 */

//convert hex to rgb
    function convertHexToRgb(hex: string): number[] {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] :[0,0,0];
    }
//convert rgb to hex
    function convertRgbToHex(r: number, g: number, b: number): string {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
//convert rgb to hsl
    function convertRgbToHsl(r: number, g: number, b: number): number[] {
        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0; // achromatic
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return [h, s, l];
    }
//convert hsl to rgb
    function convertHslToRgb(h: number, s: number, l: number): number[] {
        let r, g, b;
        if (s == 0) {
            r = g = b = l; // achromatic
        } else {
            let hue2rgb = function hue2rgb(p: number, q: number, t: number) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }
            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
//convert hsl to hsla
    function convertHslToHsla(h: number, s: number, l: number): number[] {
        return [h, s, l, 1];
    }
//convert hsla to hsl
    function convertHslaToHsl(h: number, s: number, l: number, a: number): number[] {
        return [h, s, l];
    }
//convert hsla to rgb
    function convertHslaToRgb(h: number, s: number, l: number, a: number): number[] {   
        let hsl = convertHslaToHsl(h, s, l, a);
        return convertHslToRgb(hsl[0], hsl[1], hsl[2]);
    }
//convert hsla to hex
    function convertHslaToHex(h: number, s: number, l: number, a: number): string {
        let rgb = convertHslaToRgb(h, s, l, a);
        return convertRgbToHex(rgb[0], rgb[1], rgb[2]);
    }
//convert rgb to rgba
    function convertRgbToRgba(r: number, g: number, b: number, a: number): number[] {
        return [r, g, b, a];
    }
//convert rgba to rgb
    function convertRgbaToRgb(r: number, g: number, b: number, a: number): number[] {
        return [r, g, b];
    }
//convert rgba to hsla
    function convertRgbaToHsla(r: number, g: number, b: number, a: number): number[] {  
        let hsl = convertRgbToHsl(r, g, b);
        return [hsl[0], hsl[1], hsl[2], a];
    }


export {convertHexToRgb,
        convertRgbToHex,
        convertRgbToHsl,
        convertHslToRgb,
        convertHslToHsla,
        convertHslaToHsl,
        convertHslaToRgb,
        convertHslaToHex,
        convertRgbToRgba,
        convertRgbaToRgb,
        convertRgbaToHsla};
        
    

