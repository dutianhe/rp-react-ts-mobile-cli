import React from 'react'
import DateDisplay from '../../components/MyDemo/MyDemo'
import styles from "./Home.module.sass"
const HomePage: React.FC = () => {
    return (
        <div  className={styles.box}>
            <h1 className={styles.title}>Hello world !</h1>
            <DateDisplay />
        </div>
    )
}

export default HomePage
