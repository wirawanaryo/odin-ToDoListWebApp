import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export default merge(common,{
  mode: "production",
  plugins: [    
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // ⬅️ replace style-loader
          "css-loader",
        ]
      }      
    ]
  }
});