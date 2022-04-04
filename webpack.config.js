const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const isDevMode = process.env.NODE_ENV === `development`;
const isProdMode = process.env.NODE_ENV === `production`;

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    open: true,
    port: isDevMode ? 8080 : 1333,
    historyApiFallback: true,
  },
  optimization: {
    minimize: isProdMode,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
};
