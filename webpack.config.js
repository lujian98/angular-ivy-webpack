
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { AngularWebpackPlugin } = require('@ngtools/webpack')

module.exports = {
    entry: {
      polyfills: "./src/polyfills.ts",
      main: "./src/app.ts"
    },
    resolve: {
      extensions: ['.js', '.ts']
    },
    devtool: "source-map",
    devServer: {
      historyApiFallback: true
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
           test: /\.[jt]sx?$/,
           loader: "@ngtools/webpack",
        },
        {
           test: /\.[cm]?js$/,
           use: {
             loader: "babel-loader",
             options: {
             cacheDirectory: true,
             compact: false,
             plugins: ['@angular/compiler-cli/linker/babel'],
           },
        },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "raw-loader",
              options: {
                esModule: false,
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ]
    },
    plugins: [
        new AngularWebpackPlugin({
            tsconfig: "./tsconfig.json",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
            scriptLoading: "blocking"
        })
    ]
};
