import { createSlice } from '@reduxjs/toolkit'
const nameSlice = createSlice({
    // 当前store的唯一id
    name: 'demo',
    // 默认值
    initialState: {
        counter: 1,
    },
    // 这里的 reducers 是react官方推荐的同步修改的方法，这里不可写异步操作
    reducers: {
        addCounter(state,action) {
            // action.payload 是传来的参数
            state.counter+=Number(action.payload);
        }
    }
})
export const { addCounter } = nameSlice.actions
// 导出 nameSlice 内的 reducers
export default nameSlice.reducer
