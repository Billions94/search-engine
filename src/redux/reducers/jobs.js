import { initialState } from "../store";
import { GET_JOBS } from "../actions";

const jobsReducer = (state = initialState.jobs, action) => {
        const { type, payload } = action;
    switch(type) {
        case GET_JOBS: 
        return {
            ...state,
            data: payload
        };    
        default: return state
    }
}

export default jobsReducer