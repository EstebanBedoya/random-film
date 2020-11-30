import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { getPopularMoviesActions } from '../../../../redux/movieDucks'
// import { credentials } from '../../../../config'
import Movie from '../Movie'
import { Grid } from '@material-ui/core'

// const { urlImage } = credentials

const renderMovie = ({ id, title, release_date, poster_path }) => {
    // const img = `${urlImage}/${poster_path}`
    return (

        <Grid item xs={12} sm={6} md={4} key={id}>
            <Movie title={title} releaseData={release_date} img={poster_path} />
        </Grid>
    )

}
const MovieList = props => {
    const movies = useSelector(state => state.movies.moviesArr)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularMoviesActions(1))
    }, [])
    console.log(movies)
    return (
        <Grid container
            justify='space-around'
            spacing={4}
            direction='row'
            alignItems='center'
            style={{ marginTop: 5 }}
        >
            {
                movies.map(movie => renderMovie(movie))
            }
        </Grid>
    )
}

MovieList.propTypes = {

}

export default MovieList
