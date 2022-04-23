import { combineReducers } from "redux";
import FavoritesReducer from "./reducers/FavoritesReducer";

const rootReducer = combineReducers({
   favorites:FavoritesReducer, 
});

export default rootReducer;