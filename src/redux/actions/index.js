export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE'

export const addToFavAction = (fav) => ({
    type: ADD_TO_FAVORITE,
    payload: fav
})

export const removeFromFavAction = (favIndex) => ({
    type: REMOVE_FROM_FAVORITE,
    payload: favIndex

})

