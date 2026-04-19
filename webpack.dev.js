import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common,{
  mode: "development",
  devServer: {
    static: "./dist",
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
});
