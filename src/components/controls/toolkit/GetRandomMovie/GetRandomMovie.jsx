import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { useSelector, useDispatch } from 'react-redux'
import { getPopularMoviesActions } from '../../../../redux/movieDucks'
import Movie from '../Movie'

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min

const selectRandomMovie = (possibleMovies) => {
    const random = randomNumber(0, possibleMovies.length)
    return possibleMovies[random]
}

// validacion para un objeto vacio o undefine; returna false si el objeto no esta vacio
const validate = (toEvaluate) => Object.keys(!toEvaluate || toEvaluate).length != 0 // no se entiende como funciona pero funciona

const GetRandomMovie = props => {
    const genres = useSelector(state => state.genres.genres)
    const movies = useSelector(state => state.movies.moviesArr)
    const [movieRecommend, setMovieRecommend] = useState({})
    const dispatch = useDispatch()

    const filterGenresTrues = () => {
        const filterGenres = genres.filter(({ check }) => check == true)
        return validate(filterGenres) ? filterGenres : genres
    }

    // Trae una pagina aleatoria de 20 peliculas; son 500 paginas
    const getRandomMovieList = () => {
        const randomPage = randomNumber(1, 501)
        dispatch(getPopularMoviesActions(randomPage))
    }

    // Genera un objeto con las posibles peliculas a recomensar 
    const getPossibleMovies = () => {
        const random = randomNumber(0, filterGenresTrues().length)
        const getRandomGenred = filterGenresTrues().find((i, index) => index === random).id
        return movies.filter(({ genre_ids }) => genre_ids.filter(item => item == getRandomGenred) == getRandomGenred)
    }

    const handleClick = () => {
        getRandomMovieList()
        setMovieRecommend(selectRandomMovie(getPossibleMovies()))

    }
    console.log(filterGenresTrues())
    const renderMovie = ({ title, release_date, poster_path }) => {
        return <Movie title={title} releaseData={release_date} img={poster_path}/>
    }

    return (

        <Grid container
            justify='center'
            alignItems='center'
        >
            <Grid item >
                <Button variant='contained' color='primary' onClick={handleClick}>
                    RECOMMEND ME
                </Button>
            </Grid>

            <Grid item style={{margin: 10}}>
                {
                    validate(movieRecommend) ? renderMovie(movieRecommend) :
                        <Skeleton variant="rect" width={300} height={400} />
                }
            </Grid>

        </Grid>

    )
}

GetRandomMovie.propTypes = {

}

export default GetRandomMovie
