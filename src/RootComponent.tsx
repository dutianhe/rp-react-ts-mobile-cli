import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import './styles/main.sass'
import router from './routes'
const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                {
                    router.map((item, i) => {
                        return (
                            <Route
                                key={i}
                                path={item.path}
                                element={ <item.component /> }
                            />
                        )
                    })
                }

            </Routes>
        </Router>
    )
}

export default RootComponent
