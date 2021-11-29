import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk"
import favoritesReducer from "../reducers/favorites"
import jobsReducer from "../reducers/jobs"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
    key: 'root',
    storage,
}

const allReducers = combineReducers({
    data: favoritesReducer,
    jobs: jobsReducer
})

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(persistedReducer, initialState, allCompose(applyMiddleware(thunk)))

export default store 

export const persistor = persistStore(store)