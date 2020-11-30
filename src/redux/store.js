import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import movieReducer from './movieDucks'
import genreReducer from './genresDucks'

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store 
}