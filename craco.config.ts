// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    // 跨域配置
    devServer: {
        proxy: {
            '/Advert': {
                target: 'https://apift-biz.ruubypay.com',
                changeOrigin: true,
                // pathRewrite: {'^/Advert': ''}
            }
        }
    },
}
