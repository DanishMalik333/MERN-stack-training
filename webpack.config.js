const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        include: [path.resolve(__dirname, "src/assets/animations")],
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
};
