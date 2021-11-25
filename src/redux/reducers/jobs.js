import { initialState } from "../store";
import { GET_JOBS, GET_JOBS_ERROR, TOGGLE_LOADER } from "../actions";

const jobsReducer = (state = initialState.jobs, action) => {
        const { type, payload } = action;
    switch(type) {
        case GET_JOBS: 
        return {
            ...state,
            data: payload
        };
        case GET_JOBS_ERROR:
            return {
                ...state,
                isError: true
            };
        case TOGGLE_LOADER:
            return {
                ...state,
                isLoading: payload
            };  
        default: return state
    }
}

export default jobsReducer