import React, { useState} from 'react'
import {connect} from "react-redux"
import {addCounter} from "./features/counterSlice"
import styles from "./MyDemo.module.sass"
import checkImg from "@/resources/images/checked.png"
const MyDemo: React.FC = (props:any) => {
    const [date, setDate] = useState('')

    const { counter} = props;
    const {addCounterHandler} = props;
    const num = 1;


    return (
        <div className={styles.box}>
            <p>环境信息{process.env.REACT_APP_ENV}</p>
            <p>环境信息{process.env.REACT_APP_BASE_TEST_URL}</p>

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
})
export default connect(mapStateToProps, mapDispatchToProps)(MyDemo)
