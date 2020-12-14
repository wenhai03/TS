// tsconfig.json
const person:string = 'jspang'

// outDir: './build' // 编译好的文件
// typeRoot: './src' // 打包好的入口文件

// noImplicitAny: false 允许你的注释类型any不用特意表明
// strictNullChecks: false 允许有null出现

// tsc -init

// 打开配置项 removeComments: true 打包去掉注释。
// 要生效直接输入tsc
// 注意：如果想编译某个或者排除某个不编译
// include: ['demo.ts']   exclude   files === include
