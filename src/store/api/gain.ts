import {createAsyncThunk} from '@reduxjs/toolkit'
import {Http} from '@/utils/customAxios'
import {API} from '@/store/api/api'


/** 返回数据类型 **/
interface ResponseData {

}

/** 请求数据类型 **/
interface RequestData {
    placeIds: string
}

/**
 * @author <dutianhe@ruubypay.com>
 * @date 2024-01-18 13:57:43
 * @description 网络接口请求
 * @module
 * @return
 */
export const fetchGain = createAsyncThunk<ResponseData[], RequestData>(
    /**
     * 一个字符串类型的 action 名称，用于在 Redux 中识别该 action。
     * 该名称通常包含操作名称和状态
     *  */
    'fetch/gain',
    /**
     * 异步操作函数，该函数接收两个参数
     * 第一个参数是 thunk 的 payload，也就是调用的时候传过来的
     * 第二个参数是thunk对象
     * dispatch
     * 用于 dispatch 其他 action 的函数
     * getState
     * 用于获取当前 Redux store 中的 state 的函数
     * extra
     * 性是用于传递额外参数的对象
     *
     */
    async (arg, {dispatch, getState, extra}) => {
        // 异步操作函数，必须返回一个 Promise
        const {data} = await Http.post({
            url: API.gain,
            data: {
                'cityCode': '1101',
                'platformCode': 'YTX',
                'deviceCode': 'IOS',
                'placeIds': arg.placeIds,
                'businessType': '01'
            }
        })
        console.log(data)
        return data
    },
    {} // 可选的配置项
)
