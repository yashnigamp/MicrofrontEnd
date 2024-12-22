const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "product",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/bootstrap.js",
      },
      shared: ['faker']
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
