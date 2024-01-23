import { createSlice } from '@reduxjs/toolkit'
import fetchGain from '@/store/api/gain'

const gainSlice = createSlice({
    name: 'gainSlice',
    initialState: {
        loading:false,
        data:null
    },
    reducers: {
        changeData(state, { payload }) {
            console.log(payload)
            state.data = payload.data
        }
    },
    // 额外的 reducer 执行异步操作
    extraReducers: {
        // 计算属性名 [computedNames]
        [fetchGain.pending.toString()](state, action) {
            state.loading=true;
            console.log('fetchAsyncList 执行中还未有结果')
        },
        [fetchGain.fulfilled.toString()](state, { payload }) {
            state.loading=false;
            state.data = payload.resData;
            console.log('fetchAsyncList 拿到结果了', payload)
        },
        [fetchGain.rejected.toString()](state, action) {
            state.loading=false;
            console.log('fetchAsyncList 错误了')
        }
    }
})

export const { changeData } = gainSlice.actions

export default gainSlice.reducer
