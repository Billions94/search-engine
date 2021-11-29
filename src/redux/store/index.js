import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk"
import favoritesReducer from "../reducers/favorites"
import jobsReducer from "../reducers/jobs"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { encryptTransform } from "redux-persist-transform-encrypt"


const ghost = process.env.REACT_APP_SECRET_KEY
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
    transforms: [
        encryptTransform({
            secretKey: ghost
        })
    ]
}

const allReducers = combineReducers({
    data: favoritesReducer,
    jobs: jobsReducer
})

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(persistedReducer, initialState, allCompose(applyMiddleware(thunk)))

export default store 

export const persistor = persistStore(store)