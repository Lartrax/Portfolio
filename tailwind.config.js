module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: "500px",
      // => @media (min-width: 500px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      "orange-light": "#ff955f",
      "orange-dark": "",
      "green-light": "#a6c64c",
      "green-dark": "",
      "blue-light": "#86c6be",
      "blue-dark": "",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
