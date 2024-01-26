import { combineReducers, configureStore, Reducer} from '@reduxjs/toolkit'
import counterSlice from '@/components/MyDemo/features/counterSlice'
import gainSlice from '@/store/features/gainSlice'


/**
 * @author dutianhe@ruubypay.com
 * @date 2024-01-26 15:27:02
 * @description 导入 Reducer
 * @module
 * @return Reducer
 */
const rootReducer:Reducer = combineReducers({
    counterSlice,
    gainSlice
})










const store = configureStore({
    reducer: rootReducer,
    // reduxjs/toolkit 默认是已经集成了 redux-thunk 和 redux-devtool 如果需要添加其他中间件可以使用middleware参数，传入其他的中间件
    // middleware: [thunk, logger],
    // 是否配置 devTool 工具，默认为 true 开发环境建议 true 生产环境建议 false
    devTools: true
})

export default store
