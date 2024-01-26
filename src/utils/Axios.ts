import axios from 'axios'
import {ApiBaseType} from '@/interface/ApiBaseType'

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

export default customAxios
