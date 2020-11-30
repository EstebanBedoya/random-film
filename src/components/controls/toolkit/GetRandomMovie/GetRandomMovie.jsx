import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { getPopularMoviesActions } from '../../../../redux/movieDucks'
import Movie from '../Movie'

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min

const selectRandomMovie = (possibleMovies) => {
    const random = randomNumber(0, possibleMovies.length)
    return possibleMovies[random]
}

const GetRandomMovie = props => {
    const genres = useSelector(state => state.genres.genres)
    const movies = useSelector(state => state.movies.moviesArr)
    const [movieRecommend, setMovieRecommend] = useState({})
    const dispatch = useDispatch()

    const filterGenresTrues = genres.filter(({ check }) => check == true)

    const validate = Object.keys(!movieRecommend || movieRecommend).length != 0

    const getRandomMovieList = () => {
        const randomPage = randomNumber(1, 501)
        dispatch(getPopularMoviesActions(randomPage))
    }

    const getPossibleMovies = () => {
        const random = randomNumber(0, filterGenresTrues.length)
        const getRandomGenred = filterGenresTrues.find((i, index) => index === random).id
        return movies.filter(({ genre_ids }) => genre_ids.filter(item => item == getRandomGenred) == getRandomGenred)
    }

    const handleClick = () => {
        getRandomMovieList()
        setMovieRecommend(selectRandomMovie(getPossibleMovies()))
    }

    console.log(movieRecommend)
    const renderMovie = ({ title, release_date, poster_path }) => {
        return <Movie title={title} releaseData={release_date} img={poster_path} />
    }

    return (

        <Grid container
        justify='center'
        alignItems='center'
        >
            <Grid item>
                <Button variant='contained' color='primary' onClick={handleClick}>
                    RECOMMEND ME
                </Button>
            </Grid>
            <Grid item>
                {
                    validate && renderMovie(movieRecommend)
                }

            </Grid>
        </Grid>

    )
}

GetRandomMovie.propTypes = {

}

export default GetRandomMovie
