const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "mfe3",
      filename: "remoteEntry.js",
      exposes: {
        "./Remote3": "./src/bootstrap.js",
      },
      shared: ['faker']
    }),
  ],
};
