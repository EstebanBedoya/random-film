import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Tabs, Tab, Link } from '@material-ui/core'
import { Link as LinkRouter } from 'react-router-dom'

const AppFrame = ({ }) => {
    return (
        <Paper>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered>

                <Link component={LinkRouter}
                    to='/' color='inherit' aria-label='menu' underline='none'>
                    <Tab label='popular movies' />
                </Link>

                <Link component={LinkRouter}
                    to='/recommend' color='inherit' aria-label='menu' underline='none'>
                    <Tab label='recommend me a movie' />
                </Link>
            </Tabs>

        </Paper>
    )
}

AppFrame.propTypes = {

}

export default AppFrame
