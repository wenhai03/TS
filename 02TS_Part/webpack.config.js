// 引入一个包
const path = require('path')
// 引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack中的所以配置信息都应该写在module.export
module.exports = {
  // 指定入口文件
  entry: './src/index.ts',
  //指定打包文件所在目录
  output: {
    path: path.join(__dirname, 'dist'),
    // 打包后文件的文件名
    filename: 'bundle.js',
    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false,
    },
  },
  
  // 指定webpack打包时候要使用模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是要规则生效的文件
        test: /\.ts/,
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "88",
                      "ie": "11"
                    },
                    // 指定corejs的版本
                    "corejs": "3",
                    // 使用corejs的方法 'usage' 表示按需加载
                    useBuiltIns: "usage",
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node_modules/
      }
    ]
  },
  
  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: '这个自定义的title'
      template: './src/index.html',
    }),
  ],
  
  
  // 用来设置应用模块
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  }
}
