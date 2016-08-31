const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./tests/unit-tests/index-test.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.svg/, loader: "svg-url-loader" },
      { test: /\.js$/, exclude: "/node_modules/", loader: "babel-loader" },
      { test: /\.png$/, loader: "url-loader",
      query: { mimetype: "image/png" }},
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!resolve-url!sass?sourceMap" }
    ]
  },
  resolve: {
  extensions: ['', '.js', '.json', '.scss', '.css']
  }

};
