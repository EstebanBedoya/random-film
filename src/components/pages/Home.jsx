import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import generateStore from '../../redux/store'
import PropTypes from 'prop-types'
import MovieList from '../controls/toolkit/MovieList'
import AppFrame from '../controls/general-purpose/Appframe'

const Home = props => {
    const store = generateStore()

    return (
        <Provider store={store}>
            <AppFrame>
                <MovieList></MovieList>
            </AppFrame>
        </Provider>
    )
}

Home.propTypes = {

}

export default Home
