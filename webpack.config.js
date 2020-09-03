const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/App.js"
  },
  output: {
    path: path.join(__dirname, "/src/dist"),
    filename: "[name].js",
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}