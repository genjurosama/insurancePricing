import { combineReducers } from "redux";
import { moduleReducer } from "./module";


//Pattern of precombining all reducers to keep the store init cleaner
export default combineReducers({ moduleReducer});
