const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: "./src/popup/index.tsx",
    background: "./src/background/index.ts",
    content: "./src/content/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/popup.html",
      filename: "popup.html",
      chunks: ["popup"],
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/manifest.json", to: "manifest.json" },
        { from: "public/icon.png", to: "icon.png" },
        { from: "public/icons", to: "icons" },
      ],
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
