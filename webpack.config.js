const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "production",

  entry: ["./src/index"],

  output: {
    library: "Skeleton",
    libraryTarget: "umd",
    filename: "bundle.js"
  },

  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "_"
    }
  },

  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new CopyPlugin([
      {
        from: 'src/index.d.ts',
        to: 'index.d.ts',
      },
    ]),
  ],
};
