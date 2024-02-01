import React, {useEffect} from 'react'
import DateDisplay from '../../components/MyDemo/MyDemo'
import styles from "./Home.module.sass"
import {gainFetch} from "@/api/gainFetch";
import {connect} from "react-redux";

const HomePage: React.FC = (props:any) => {
    const {gainData, loading} = props;
    const { getGainHandler} = props;
    /**
     *  get api gain data demo
     */
    useEffect(() => {
        getGainHandler();
    }, [getGainHandler])
    return (
        <div className={styles.box}>
            <h1 className={styles.title}>Hello world !</h1>
            <p> {loading ? <span>gain接口加载中...</span> : <span>gain接口加载完毕</span>}</p>
            {(!loading && Boolean(gainData)) && (
                <pre className={styles.pre}>
                    {JSON.stringify(gainData, null, 2)}
                </pre>)}
            <DateDisplay/>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        loading: state.gainSlice.loading,
        gainData: state.gainSlice.data,
    }
}
const mapDispatchToProps = (dispatch: any) => ({
    getGainHandler() {
        dispatch(gainFetch({
            placeIds: "140"
        }))
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
