import {createSlice, PayloadAction} from '@reduxjs/toolkit'


/** 初始化state 默认值 **/
interface InitialStateType {
    counter:number
}
const initialState:InitialStateType = {
    counter: 1,
}

const counterSlice = createSlice({
    // 当前store的唯一id 命名方式：页面名称+功能名称
    name: 'home/counterSlice',
    // 默认值
    initialState,
    // 这里的 reducers 是react官方推荐的同步修改的方法，这里不可写异步操作
    reducers: {
        addCounter(state,action:PayloadAction<any>) {
            // action.payload 是传来的参数
            state.counter+=Number(action.payload);
        }
    }
})
export const { addCounter } = counterSlice.actions
// 导出 counterSlice 内的 reducers
export default counterSlice.reducer
