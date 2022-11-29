export const theme = Object.freeze({
  colors: {
    accent: '#00c2e0',
    white: '#ffffff',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
    offline: '#DC143C',
    online: '#00FF00',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 300],

  randomeHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },
});
