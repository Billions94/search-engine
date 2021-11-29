import { initialState } from "../store";
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions";

const favoritesReducer = (state = initialState.data, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((el) => el._id !== payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
