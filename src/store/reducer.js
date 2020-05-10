import {combineReducers} from "redux-immutable";
// redux-immutable 的作用是将 store中的js 对象转化为immutable对象
// import {combineReducers} from "redux";
import headerReducer from "../pages/header/store/reducer"

export default combineReducers({
    header:headerReducer
})
