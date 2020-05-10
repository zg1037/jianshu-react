import {combineReducers} from "redux-immutable";
// import {combineReducers} from "redux";
import headerReducer from "../pages/header/store/reducer"

export default combineReducers({
    header:headerReducer
})
