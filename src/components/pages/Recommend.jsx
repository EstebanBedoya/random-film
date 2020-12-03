import React from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../controls/general-purpose/Appframe'
import { Provider } from 'react-redux'
import generateStore from '../../redux/store'
import FilterMovie from '../controls/toolkit/FilterMovie'
import GetRandomMovie from '../controls/toolkit/GetRandomMovie'

const Recommend = props => {
    const store = generateStore()
    return (
        <Provider store={store}>
            <AppFrame />
            <h1>se le quiere</h1>

                <FilterMovie />
                <GetRandomMovie />
                

        </Provider >
    )
}

Recommend.propTypes = {

}

export default Recommend
