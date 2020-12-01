import { combineReducers } from "redux";
import themesReducer from "store/themesReducer";

export default combineReducers({
  themes: themesReducer,
});
