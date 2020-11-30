import React from 'react'
import PropTypes from 'prop-types'
import {
    Card, CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    makeStyles
} from '@material-ui/core'
import { credentials } from '../../../../config'

const { urlImage } = credentials

const useStyles = makeStyles({
    root: {
        maxWidth: 320,
    },
    media: {
        height: 250,
    },
});

const Movie = ({ title, releaseData, img }) => {
    const classes = useStyles();
    const image = `${urlImage}/${img}`
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {releaseData}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    releaseData: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default Movie
