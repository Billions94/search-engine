import { initialState } from "../store"
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions"

const mainReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch(type){

        default: return state
    }
}

export default mainReducer