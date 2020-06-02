import { combineReducers } from "redux";
import pokemonsReducer from "./pokemonsReducer";
import darkModeReducer from "./darkModeReducer";
import languageReducer from "./languageReducer";

const allReducers = combineReducers({
    pokemonsReducer,
    darkModeReducer,
    languageReducer
});

export default allReducers;
