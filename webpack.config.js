const path = require("path");

module.exports = {
  experiments: {
    topLevelAwait: true,
  },
  mode: "development",
  devtool: "eval-source-map",
  entry: ["./src/index.js"],
  entry: ["./src/connect.js"],
  output: {
    filename: "kineme.js",
  },
};
