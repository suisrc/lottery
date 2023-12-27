const baseConfig = require("./webpack.config");
const merge = require("webpack-merge");
const serve = require("../server/server.js");

module.exports = merge(baseConfig, {
  devtool: "#eval-source-map",
  devServer: {
    disableHostCheck: true,
    hot: true,
    compress: true,
    host: "0.0.0.0",
    port: 9000,
    open: true,
    proxy: {
      "*": "http://localhost:8090"
    },
    before() {
      serve.run(8090, "n");
    }
  }
});
