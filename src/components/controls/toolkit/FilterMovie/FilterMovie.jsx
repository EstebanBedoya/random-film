import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Grid } from '@material-ui/core'
import SwitchFilter from '../../general-purpose/SwitchFilter'
import { useDispatch, useSelector } from 'react-redux'
import { getGenreMovieActions, changeCheckGenreAction } from '../../../../redux/genresDucks'

const renderSwitch = ({ id, name }) => {
    return (
            <SwitchFilter name={name} key={id} id={id} />
    )
}

const FilterMovie = props => {

    const genres = useSelector(state => state.genres.genres)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenreMovieActions())
    }, [])

    return (
            <FormGroup row>
                {
                    genres.map((item) => renderSwitch(item))
                }
            </FormGroup>
    )
}

FilterMovie.propTypes = {

}

export default FilterMovie
