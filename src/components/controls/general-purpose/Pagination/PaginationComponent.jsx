import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Pagination } from '@material-ui/lab'
import { getPopularMoviesActions } from '../../../../redux/movieDucks'

const PaginationComponent = ({ numberPages }) => {
    const dispatch = useDispatch()

    const handleChange = (event, value) => {
        dispatch(getPopularMoviesActions(value))
    }
 
    useEffect(() => {
        dispatch(getPopularMoviesActions(1))
    }, [])

    return (
        <Pagination count={numberPages} 
        variant='outlined' 
        color='primary'
        onChange={handleChange}/>
        
    )
}

PaginationComponent.propTypes = {

}

export default PaginationComponent
