import {createSlice} from '@reduxjs/toolkit'
import {gainFetch} from '@/api/gainFetch'
import { BaseReqInitStateType} from "@/interfaces/ApiBaseType";
import {LOADING_STATUS_INIT,LOADING_STATUS_PENDING,LOADING_STATUS_FULFILLED,LOADING_STATUS_REJECTED} from "@/resources/consts/loadingStatus";


/** 初始化state 默认值 **/
interface InitStateType extends BaseReqInitStateType {
    other?:any
}

const initialState: InitStateType = {
    loadingStatus: LOADING_STATUS_INIT,
    data: {}
}

const gainSlice = createSlice({
    // 当前store的唯一id 命名方式：页面名称+功能名称
    name: 'home/gainSlice',
    initialState,
    reducers: {
        changeData(state, {payload}) {
            console.log(payload)
            state.data = payload.data
        }
    },
    // 额外的 reducer 执行异步操作
    extraReducers: {
        // 计算属性名 [computedNames]
        [gainFetch.pending.toString()](state) {
            state.loadingStatus = LOADING_STATUS_PENDING;
            console.log('fetchAsyncList 执行中还未有结果')
        },
        [gainFetch.fulfilled.toString()](state, {payload}) {
            state.loadingStatus = LOADING_STATUS_FULFILLED;
            state.data = payload.resData;
            console.log('fetchAsyncList 拿到结果了', payload)
        },
        [gainFetch.rejected.toString()](state) {
            state.loadingStatus =LOADING_STATUS_REJECTED;
            console.log('fetchAsyncList 错误了')
        }
    }
})

export const {changeData} = gainSlice.actions

export default gainSlice.reducer
