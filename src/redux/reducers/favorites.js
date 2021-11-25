import { initialState } from "../store";
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions";

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        data: {
          favorites: [...state.data.favorites, payload],
        },
      };
    case REMOVE_FROM_FAVORITE:
        return {
            ...state,
            data: {
                favorites: state.data.favorites.filter((el, i ) => i !== payload)
            }
        };
    default:
      return state;
  };
};

export default mainReducer;
