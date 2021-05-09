module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Open Sans"],
    },
    extend: {
      colors: {
        gray: {
          light: "#E8E8E8",
          "icon-light": "#CCCCCC",
          icon: "#878B91",
          bg: "#F5F7F9",
        },
        blue: {
          icon: "#232C47",
          badge: "#0381BE",
        },
      },
      maxWidth: {
        "1/2": "50%",
      },
      fontSize: {
        10: "0.6rem",
        12: "0.74rem",
        14: "0.85rem",
        16: "1rem",
        18: "1.13rem",
        20: "1.25rem",
        22: "1.4rem",
        24: "1.55rem",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
