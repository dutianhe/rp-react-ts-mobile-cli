import axios from 'axios'
import {ApiBaseType} from '@/interfaces/ApiBaseType'

/**
 * @author dutianhe@ruubypay.com
 * @date 2024-01-25 16:24:30
 * @description axios 封装
 * @module customAxios.post
 * @module customAxios.get
 * @return axios
 */
const customAxios = axios.create({
    timeout: 6000, // request timeout  设置请求超时时间
    responseType: 'json',
    withCredentials: true, // 是否允许带cookie
    headers: {
        /* eslint-disable-next-line */
        'Content-Type': 'application/json;charset=utf-8'
    }
})

/** 请求拦截器 **/
customAxios.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

/** 响应拦截器 **/
customAxios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export const Http = {

    /**
     * @author dutianhe@ruubypay.com
     * @date 2024-01-25 16:33:00
     * @description axios post
     * @module
     * @return Promise
     */
    post: ({url, data}: ApiBaseType): Promise<any> => customAxios.post(url, data),


    /**
     * @author dutianhe@ruubypay.com
     * @date 2024-01-25 16:33:00
     * @description axios get
     * @module
     * @return Promise
     */
    get: ({url, data}: ApiBaseType): Promise<any> => customAxios.get(url, data),
}

/**
 * @author <liuyi@ruubypay.com>
 * @date 2024-03-22 19:21:15
 * @description  rpjssdk 数据请求封装 适配app
 * @param params
 * @return Promise
 */
export const rpRequest = async (params: { url: string, method?: string, data?: object, tokenType?: number }) => request({
    url: params.url,
    method: params.method || 'post', //支持 GET POST
    tokenType: params.tokenType || 2, // 0不添加公共参数, 1默认密钥计算mac, 2用户密钥计算mac
    arguments: params.data,
})


export default customAxios
