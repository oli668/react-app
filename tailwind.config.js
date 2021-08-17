module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      inherit: "inherit",
      none: "none",
      2: "2 2 0%",
    },
    fontFamily: {
      main_theme: ["PingFangSC-Regular, sans-serif;"],
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
      height: {
        large: "46rem",
      },
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#e4e3dd",
        DEFAULT: "#f6f6f4",
        dark: "#2F7EF7",
      },
      gray: {
        dark: "#e4e3dd",
        DEFAULT: "#f6f6f4",
        light: "#E2E6F2",
      },
      testing: {
        dark: "#C0C0C0",
        DEFAULT: "#C0C0C0",
      },
      green: {
        DEFAULT: "#32CD32",
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
      overlay: {
        DEFAULT: "rgba(0,0,0,0.5)",
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
