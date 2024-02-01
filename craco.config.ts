// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
import packageJSON from "./package.json"
import proxy from "./dev.proxy"

const GenerateConfigWebpackPlugin = require('generate-deployment-config-webpack-plugin-by-react')
const VConsolePlugin = require('vconsole-webpack-plugin')
const pxtorem = require('postcss-pxtorem')
/**
 * @author dutianhe@ruubypay.com
 * @date 2024-01-29 15:31:38
 * @description 自定义webpack配置
 * @module
 * @return object
 */
let plugins = []
console.log("argv.mode ", argv.mode)
if (argv.mode !== "release") {
    plugins.push(
        new VConsolePlugin({
            enable: true,
        })
    )
}
if (argv.mode) {
    plugins.push(
        new GenerateConfigWebpackPlugin({
            // 插件选项配置
            projectName: packageJSON.name,
            env: argv.mode,

        }, {
            outDir: `target/${argv.mode}/${packageJSON.name}`
        })
    )
}
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        plugins,
        configure: (webpackConfig: any, {env, paths, mode}: any) => {
            console.log("argv", argv.mode)
            console.log("env", env)
            let base = null;
            switch (argv.mode) {
                case "debug":
                    base = "//static-cs.ruubypay.com";
                    break;
                case "test":
                    base = "//static-ft.ruubypay.com"
                    break;
                case "release":
                    base = "//static.ruubypay.com"
                    break;
            }
            paths.appBuild = path.resolve(__dirname, `target/${argv.mode}/${packageJSON.name}`)// 修改打包输出文件目录
            if (base) webpackConfig.output.publicPath = base + "/" + packageJSON.name; // 修改静态资源路径
            webpackConfig.output = {
                ...webpackConfig.output,
                clean: true,
                path: path.resolve(__dirname, `target/${argv.mode}/${packageJSON.name}`), // 修改打包输出文件目录 两步都要写
            }
            return webpackConfig;
        }
    },
    // 跨域配置
    devServer: {
        proxy
    },
    style: {
        postcss: {
            mode: 'extends',
            loaderOptions: {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: [[
                        pxtorem({
                            rootValue: 75,//根据ui提供的效果图修改  看是1x还是2x
                            propList: ['*'],
                            minPixelValue: 3,
                            exclude: /node_modules/i,
                        })]],
                },
            },
        },
    },
}
