import axios from 'axios'
import { credentials } from '../config'

// consts
const dataInit = {
    moviesArr: []
}

const { baseUrl, apiKey } = credentials

const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'

// reducer 
export default function movieReducer(state = dataInit, action) {
    switch (action.type) {
        case GET_MOVIES_SUCCESS:

            return { ...state, moviesArr: action.payload }

        default:
            return state
    }
}

// actions 
export const getPopularMoviesActions = (page) => async (dispatch) => {

    // 'https://api.themoviedb.org/3/movie/popular?api_key=b6ae30af174c58ba41ba6a4af122f4aa'
    try {
        const res = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`)
        dispatch({
            type: GET_MOVIES_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}