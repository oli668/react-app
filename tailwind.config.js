module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      card_md: "140px",
      card: "253px",
    },
    maxWidth: {
      card_md: "225px",
      card: "253px",
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
      animation: {
        sidebarOpen: "sidebarOpen 200ms linear",
      },
      keyframes: {
        sidebarOpen: {
          "0%": { width: "5rem" },
          "50%": { width: "7rem" },
          "75%": { width: "10rem" },
          "100%": { width: "20rem" },
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#ccf2f4",
        DEFAULT: "#a4ebf3",
      },
      gray: {
        dark: "#aaaaaa",
        DEFAULT: "#f4f9f9",
      },
      black: {
        DEFAULT: "#000000",
        light: "#222831",
      },
      warning: {
        DEFAULT: "#e97878",
      },
      white: {
        DEFAULT: "#ffffff",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      fontWeight: ["hover, focus"],
      opacity: ["group-hover"],
    },
  },
  plugins: [],
};
