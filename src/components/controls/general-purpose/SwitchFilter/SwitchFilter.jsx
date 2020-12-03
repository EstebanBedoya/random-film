import React from 'react'
import PropTypes from 'prop-types'
import { Switch, FormControlLabel } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { changeCheckGenreAction } from '../../../../redux/genresDucks'

const SwitchFilter = ({ name, id }) => {
    const dispatch = useDispatch()

    const handleChange = (id) => {
        dispatch(changeCheckGenreAction(id))
    }
    return (
        <FormControlLabel
            control={<Switch name={name} color='primary' onChange={() => handleChange(id)} />}
            label={name}
            
        />
    )
}

SwitchFilter.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default SwitchFilter
