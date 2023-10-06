import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from "../components/Chat/redux/global.slice";
import appReducer from "../views/redux/app.slice";

const rootReducer = combineReducers({
    globalReducer,
    appReducer
});

export default rootReducer;
