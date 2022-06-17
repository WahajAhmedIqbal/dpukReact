import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
import {
    HomePageContainer,
    PageNotFoundContainer
} from '../containers'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePageContainer />} />
                <Route path='*' element={<PageNotFoundContainer />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Routers