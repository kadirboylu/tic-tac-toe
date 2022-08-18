const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/Components/"),
      "@contexts": path.resolve(__dirname, "src/contexts/"),
    },
  },
};
