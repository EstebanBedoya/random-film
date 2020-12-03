import axios from 'axios'
import { credentials } from '../config'

// consts
const dataInit = {
    genres: []
}

const { baseUrl, apiKey } = credentials

const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS'
const CHANGE_CHECKED_VALUE_SUCCESS = 'CHANGE_CHECKED_VALUE_SUCCESS'

// reducer 
export default function genreReducer(state = dataInit, action) {
    switch (action.type) {
        case GET_GENRES_SUCCESS:
        // .map(item => ({ ...item, check: false }))
            return { ...state, genres: action.payload.map(item => ({ ...item, check: false })) }

        case CHANGE_CHECKED_VALUE_SUCCESS:
            return { ...state, genres: [...action.payload] }
        default:
            return state
    }
}

// actions 
export const getGenreMovieActions = () => async (dispatch) => {

    // 'https://api.themoviedb.org/3/genre/movie/list?api_key=b6ae30af174c58ba41ba6a4af122f4aa'
    try {
        const res = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
        dispatch({
            type: GET_GENRES_SUCCESS,
            payload: res.data.genres
        })
    } catch (error) {
        console.log(error)
    }
}

export const changeCheckGenreAction = (id) => (dispatch, getState) => {
    const { genres } = getState().genres


    const change = (id) => {
        return genres.map(item => {
            
            if (item['id'] === id) {
                item['check'] = !item['check']? true: false
                return item
            }
            return item
        })
    }

    dispatch({
        type: CHANGE_CHECKED_VALUE_SUCCESS,
        payload: change(id)
    })
}