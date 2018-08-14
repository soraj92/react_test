var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public/",
    filename: "bundle.js",
    publicPath: "/"
  },
  //
  // devServer: {
  //   contentBase: __dirname + "/public/"
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["es2015", "react"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
};