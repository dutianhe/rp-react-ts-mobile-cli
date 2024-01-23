import axios from 'axios'
import { httpParam } from '@/interface/HttpParam'

const CustomAxios = axios.create({
    timeout: 6000, // request timeout  设置请求超时时间
    responseType: 'json',
    withCredentials: true, // 是否允许带cookie
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

const http = function({ method, url, data}:httpParam) : Promise<any>{
    return CustomAxios({
        method,
        url,
        data
    })
}



/**
 * @author <dutianhe@ruubypay.com>
 * @date 2024-01-17 17:26:32
 * @description 请求拦截器
 * @module
 * @return
 */
CustomAxios.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


/**
 * @author <dutianhe@ruubypay.com>
 * @date 2024-01-17 17:26:43
 * @description 响应拦截器
 * @module
 * @return
 */
CustomAxios.interceptors.response.use(
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
     * @date 2024-01-15 11:34:55
     * @description
     * @module
     * @return
     */
    post: (params:httpParam) => http({ method: 'post', ...params }),


    /**
     * @author dutianhe@ruubypay.com
     * @date 2024-01-15 11:34:55
     * @description
     * @module
     * @return
     */
    get: (params:httpParam) => http({ method: 'get', ...params })
}

export default CustomAxios
