import React from 'react'
import {Link} from "react-router-dom"

const NotFoundPage: React.FC = () => {



    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Oops 404!</h1>
            <Link to={"/"} style={{ cursor: 'pointer' }}>
                Homepage
            </Link>
        </div>
    )
}

export default NotFoundPage
