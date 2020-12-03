import React from 'react'
import { Provider } from 'react-redux'
import generateStore from '../../redux/store'
import MovieList from '../controls/toolkit/MovieList'
import { Grid, Typography } from '@material-ui/core'
import FilterMovie from '../controls/toolkit/FilterMovie'
import GetRandomMovie from '../controls/toolkit/GetRandomMovie'

const Home = props => {
    const store = generateStore()

    return (
        <Provider store={store}>
            <Grid container justify='center' xs={12}>

                <Grid item>
                    <Typography variant='h1'>
                        Random film
                </Typography>
                </Grid>

                <Grid item >
                    <FilterMovie />
                </Grid>

                <Grid item xs={3}
                    style={{ height: 500, width: '100%', margin: 10 }}>
                    <GetRandomMovie />
                </Grid>
            </Grid>

            <Grid container >
                <Grid item>
                    <Typography variant='h3'>
                        Mas populares
                    </Typography>
                </Grid>
                <Grid item style={{
                    overflow: 'scroll', backgroundColor: '#C1BBDD',
                    width: '100%',
                }}>
                    <MovieList />
                </Grid>

            </Grid>

        </Provider>
    )
}

Home.propTypes = {

}

export default Home
