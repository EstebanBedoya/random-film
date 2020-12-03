import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Movie from '../Movie'
import {
    Grid,
    GridListTile,
    GridList,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import { getPopularMoviesActions } from '../../../../redux/movieDucks'



const renderMovie = ({ id, title, release_date, poster_path }) => {

    return (

        <Grid item key={id} style={{ margin: 5 }}>
            <Movie title={title} releaseData={release_date} img={poster_path} />
        </Grid >
    )

}

const MovieList = props => {
    const movies = useSelector(state => state.movies.moviesArr)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularMoviesActions(1))
    }, [])

    return (
        <Grid container
            spacing={4}
            wrap='nowrap'>
            {
                movies.map(movie => renderMovie(movie))
            }
        </Grid>

    )
}

MovieList.propTypes = {

}

export default MovieList
