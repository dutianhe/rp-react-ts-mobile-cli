import React, { useEffect, useState } from 'react'
import {connect} from "react-redux"
import {addCounter} from "@/store/slices/demo"
import  fetchGain from '@/store/api/gain'
const MyDemo: React.FC = (props:any) => {
    const [date, setDate] = useState('')

    const {gainData,loading,counter} = props;
    const {addCounterHandler,getGainHandler} = props;
    const num = 1;
    /**
     *  get api gain data demo
     */
    useEffect(() => {
        getGainHandler();
    }, [])

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <p>
                {loading ? <span>gain接口加载中...</span> : <span>gain接口加载完毕</span>}
                {(!loading && Boolean(gainData)) && (<div>gain接口返回数据：{JSON.stringify(gainData)}</div>)}
            </p>
            <div>
               <span> 计数器DEMO：{counter} </span>
                <button onClick={()=>addCounterHandler(num)}>加{num}</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state:any) => {
    return {
        counter:state.demoReducer.counter,
        loading:state.gainReducer.loading,
        gainData:state.gainReducer.data,
    }
}
const mapDispatchToProps = (dispatch:any) => ({
    addCounterHandler(num:number) {
        dispatch(addCounter(num))
    },

    getGainHandler() {
        dispatch(fetchGain())
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(MyDemo)


