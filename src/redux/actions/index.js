export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const GET_JOBS = "GET_JOBS";

export const addToFavAction = (fav) => ({
  type: ADD_TO_FAVORITE,
  payload: fav,
});

export const removeFromFavAction = (favIndex) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: favIndex,
});

export const getJobsAction = (input) => {
    console.log('i am the input text', input)
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${input.text}&limit=10`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const newData = data.data

        dispatch({
          type: GET_JOBS,
          payload: newData,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
