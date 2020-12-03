import axios from 'axios'
import { credentials } from '../config'

// consts
const dataInit = {
    moviesArr: [],
    page: 1
}

const { baseUrl, apiKey } = credentials

const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'

// reducer 
export default function movieReducer(state = dataInit, action) {
    switch (action.type) {
        case GET_MOVIES_SUCCESS:

            return { ...state, moviesArr: action.payload.res, page: action.payload.page }

        default:
            return state
    }
}

// actions 
export const getPopularMoviesActions = (value) => async (dispatch) => {

    try {
        const res = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${value}`)
        dispatch({
            type: GET_MOVIES_SUCCESS,
            payload: {
                res: res.data.results,
                page: value
            }
        })
    } catch (error) {
        console.log(error)
    }
}
