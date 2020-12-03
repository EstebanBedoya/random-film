import React from 'react'
import PropTypes from 'prop-types'
import {
    Card, CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core'
import { credentials } from '../../../../config'
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree'
import { useStyles } from './style'

const { urlImage } = credentials

const Movie = ({ title, releaseData, img }) => {
    const classes = useStyles()
    const mediaStyles = useFourThreeCardMediaStyles();
    const image = `${urlImage}/${img}`

    return (
        <CardActionArea className={classes.actionArea}>
            <Card className={classes.card}>
                <CardMedia classes={mediaStyles} image={image} />
                <CardContent className={classes.content}>
                    <Typography className={classes.title} variant={'h2'}>
                        {title}
                    </Typography>
                    <Typography className={classes.subtitle}>{releaseData}</Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    releaseData: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default Movie
