import {createSlice} from '@reduxjs/toolkit'
import {gainFetch} from '@/store/async/gainFetch'
import { BaseReqInitStateType} from "@/interface/ApiBaseType";


/** 初始化state 默认值 **/
interface InitStateType extends BaseReqInitStateType {
    other?:any
}

const initialState: InitStateType = {
    loadingStatus: 'init',
    data: {}
}

const gainSlice = createSlice({
    name: 'gainSlice',
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
            state.loadingStatus = 'pending';
            console.log('fetchAsyncList 执行中还未有结果')
        },
        [gainFetch.fulfilled.toString()](state, {payload}) {
            state.loadingStatus = 'fulfilled';
            state.data = payload.resData;
            console.log('fetchAsyncList 拿到结果了', payload)
        },
        [gainFetch.rejected.toString()](state) {
            state.loadingStatus = 'rejected';
            console.log('fetchAsyncList 错误了')
        }
    }
})

export const {changeData} = gainSlice.actions

export default gainSlice.reducer
