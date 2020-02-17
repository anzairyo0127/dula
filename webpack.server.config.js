const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/server.ts",
  output: {
    filename: "js/server.js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/"
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".ts", ".tsx", ".js", ".json", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
    ]
  }
};
