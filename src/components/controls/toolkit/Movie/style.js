import { makeStyles } from '@material-ui/core/styles'
import Color from 'color';

export const useStyles = makeStyles(() => ({
    actionArea: {
        borderRadius: 16,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    card: ({ color }) => ({
        minWidth: 256,
        borderRadius: 16,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: `0 6px 12px 0 ${Color(color)
                .rotate(-12)
                .darken(0.2)
                .fade(0.5)}`,
        },
    }),
    content: {
        backgroundColor: '#F4F0CB',
        padding: '1rem 1.5rem 1.5rem',

    },
    title: {
        fontFamily: 'Keania One',
        fontSize: '1.3rem',
        textTransform: 'uppercase',
    },
    subtitle: {
        fontFamily: 'Montserrat',
        opacity: 0.87,
        marginTop: '2rem',
        fontWeight: 500,
        fontSize: 14,
    },
}));