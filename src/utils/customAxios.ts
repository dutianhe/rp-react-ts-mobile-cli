import axios from 'axios'
import {AxiosParam} from '@/interface/AxiosParam'

const customAxios = axios.create({
    timeout: 6000, // request timeout  设置请求超时时间
    responseType: 'json',
    withCredentials: true, // 是否允许带cookie
    headers: {
        /* eslint-disable-next-line */
        'Content-Type': 'application/json;charset=utf-8'
    }
})


/**
 * @author <dutianhe@ruubypay.com>
 * @date 2024-01-17 17:26:32
 * @description 请求拦截器
 * @module
 * @return
 */
customAxios.interceptors.request.use(
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
     * @date 2024-01-15 11:34:55
     * @description
     * @module
     * @return
     */
    post: ({url, data}: AxiosParam): Promise<any> => customAxios.post(url, data),


    /**
     * @author dutianhe@ruubypay.com
     * @date 2024-01-15 11:34:55
     * @description
     * @module
     * @return
     */
    get: ({url, data}: AxiosParam): Promise<any> => customAxios.get(url, data),
}

export default customAxios
