module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      main_theme: ["cursive"],
    },
    minWidth: {
      card_md: "140px",
      card: "253px",
    },
    maxWidth: {
      card_md: "225px",
      card: "253px",
      side_menu: "475px",
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
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#e4e3dd",
        DEFAULT: "#f6f6f4",
      },
      gray: {
        dark: "#e4e3dd",
        DEFAULT: "#f6f6f4",
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
