const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    header: "./src/views/components/header/index.tsx"
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(process.cwd(), "public"),
    publicPath: "/"
  },
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
