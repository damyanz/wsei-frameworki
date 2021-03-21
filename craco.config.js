const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@organisms": path.resolve(__dirname, "src/components/organisms/"),
      "@molecules": path.resolve(__dirname, "src/components/molecules/"),
      "@atoms": path.resolve(__dirname, "src/components/atoms/"),
    },
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
