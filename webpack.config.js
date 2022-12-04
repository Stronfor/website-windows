const path = require("path");

module.exports = {
  mode: "production", // production
  entry: "./src/js/main.js",
  output: {
    filename: "bundl.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
  devtool: "source-map",
};
