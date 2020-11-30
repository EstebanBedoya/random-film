import React from 'react'
import Movie from './Movie'

export default {
    title: 'Movie',
    component: Movie
}

export const MovieExample = () => (
    <Movie
    title='GG ICI' 
    overview='muy ici pah'
    img='https://image.tmdb.org/t/p/w500/2z8mFQrT0ESSytWZqro1jsCbvCC.jpg' />
)