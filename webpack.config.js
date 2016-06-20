const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        include: __dirname,
        query: {
          presets: [ 'es2015', 'react' ]
        }
      }]
    },
    entry: [
      './index.js'
    ],
    output: {
      path: 'public',
      filename: 'main.bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'App',
        template: 'index.ejs',
      }),
    ],
  };
};
