/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import { combineReducers } from "redux";
import AppReducer from "@modules/app/redux/appSlice";
import NewsReducer from "@modules/news/redux/newsSlice";

/**
 * Root reducer function that combines all the reducers.
 * @returns The combined reducer object.
 */
export default combineReducers({
  AppReducer,
  NewsReducer,
});
