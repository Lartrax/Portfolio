module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: "501px",
      // => @media (min-width: 500px) { ... }

      sm: "641px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1025px",
      // => @media (min-width: 1024px) { ... }

      xl: "1281px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1537px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      "orange-light": "#ff955f",
      "orange-dark": "#e48d61",
      "green-light": "#a6c64c",
      "green-dark": "#9DB750",
      "blue-light": "#86B7B0",
      "blue-dark": "#62918B",
      "yellow-light": "#efca66",
      "yellow-dark": "#E0BF6B",
      white: "#ffffff",
      grey: "#e3e3e3",
      black: "#212121",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
