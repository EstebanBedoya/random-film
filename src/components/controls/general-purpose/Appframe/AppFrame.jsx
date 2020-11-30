import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper, Tabs, Tab, Link } from '@material-ui/core'
import { Link as LinkRouter } from 'react-router-dom'

const AppFrame = ({ children }) => {
    return (
        <Grid container
            justify='center'>
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

            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame
