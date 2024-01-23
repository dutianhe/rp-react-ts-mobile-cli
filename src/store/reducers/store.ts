import { combineReducers, configureStore } from '@reduxjs/toolkit'
import demoReducer from '@/store/slices/demo'
import gainReducer from '@/store/slices/gain'

/** combineReducers 将多个 reducer 函数合成 **/
const rootReducer = combineReducers({
    demoReducer,
    gainReducer
})


const store = configureStore({
    reducer: rootReducer,
    // reduxjs/toolkit 默认是已经集成了 redux-thunk 和 redux-devtool 如果需要添加其他中间件可以使用middleware参数，传入其他的中间件
    // middleware: [thunk, logger],
    // 是否配置 devTool 工具，默认为 true 开发环境建议 true 生产环境建议 false
    devTools: true
})

export default store
