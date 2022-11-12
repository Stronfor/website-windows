const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "bundl.js",
    path: path.resolve(__dirname, "dist"),
  },
};
