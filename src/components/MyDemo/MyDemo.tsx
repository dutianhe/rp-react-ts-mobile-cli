import React, {useEffect, useState} from 'react'
import {connect} from "react-redux"
import {addCounter} from "./features/counterSlice"
import {gainFetch} from '@/store/async/gainFetch'
import styles from "./MyDemo.module.sass"
import checkImg from "@/assets/images/checked.png"
const MyDemo: React.FC = (props:any) => {
    const [date, setDate] = useState('')

    const {gainData, loading, counter} = props;
    const {addCounterHandler, getGainHandler} = props;
    const num = 1;
    /**
     *  get api gain data demo
     */
    useEffect(() => {
        getGainHandler();
    }, [getGainHandler])

    return (
        <div className={styles.box}>
            <p>环境信息{process.env.REACT_APP_ENV}</p>
            <p>环境信息{process.env.REACT_APP_BASE_TEST_URL}</p>
            <p> {loading ? <span>gain接口加载中...</span> : <span>gain接口加载完毕</span>}</p>
            {(!loading && Boolean(gainData)) && (
                <pre className={styles.pre}>
                    {/*{JSON.stringify(gainData)}*/}
                    {JSON.stringify(gainData, null, 2)}
                </pre>)}
            <p>
                <span> 计数器DEMO：{counter} </span>
                <button onClick={() => addCounterHandler(num)}>加{num}</button>
            </p>

            <p>
                <img src={checkImg} />
                <span> 当前日期：{date} </span>
                <button onClick={() => setDate((new Date()).toDateString())}>设置日期</button>
            </p>
        </div>
    )
}
const mapStateToProps = (state:any) => {
    return {
        counter: state.counterSlice.counter,
        loading: state.gainSlice.loading,
        gainData: state.gainSlice.data,
    }
}
const mapDispatchToProps = (dispatch: any) => ({
    addCounterHandler(num: number) {
        dispatch(addCounter(num))
    },

    getGainHandler() {
        dispatch(gainFetch({
            placeIds: "140"
        }) )
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(MyDemo)
