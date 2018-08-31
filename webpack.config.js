const path = require("path");

module.exports = {
  entry: ["./src/index"],
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "_"
    }
  },
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    library: "Skeleton",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
