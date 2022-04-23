import * as types from '../actions/types';


const initialState = {
    favList: [],
}

const FavoriteReducer = (state=initialState, action) => {
    switch (action.type) {

        case types.ADD_FAV:
            return {
                ...state,
                favList:[...state.favList, action.payload]
            };
        
        case types.REMOVE_FAV:
            return {
                ...state,
                favList: state.favList.filter(fav => action.payload !== fav.id)
            }
        
        case types.SET_FAVS:
            return {
                ...state,
                favList: action.payload || []
            }
            
        default:
            return {
                ...state,
            };
    }
}
 
export default FavoriteReducer;