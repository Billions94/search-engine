import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk"
import favoritesReducer from "../reducers/favorites"
import jobsReducer from "../reducers/jobs"

const allCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

export const initialState = {
    data: {
        favorites: [],
    },
    jobs: {
        data: [],
        isLoading: true,
        isError: false
    }
}

const allReducers = combineReducers({
    data: favoritesReducer,
    jobs: jobsReducer
})

const store = createStore(allReducers, initialState, allCompose(applyMiddleware(thunk)))

export default store 