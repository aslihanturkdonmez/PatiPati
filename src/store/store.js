import { createStore } from "redux";
import { storage } from "../utils";
import rootReducer from './rootReducer';

const store= createStore(rootReducer);

store.subscribe(() => {
    storage.setFavorites(store.getState().favorites.favList);
});

export default store;