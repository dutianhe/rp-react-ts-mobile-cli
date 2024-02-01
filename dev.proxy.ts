/**
 * @author dutianhe@ruubypay.com
 * @date 2024-02-01 18:21:18
 * @description 本地开发代理配置
 * @module
 * @return object
 */

export default {
    '/Advert': {
        target: 'https://apift-biz.ruubypay.com',
        changeOrigin: true,
        // pathRewrite: {'^/Advert': ''}
    }
}
