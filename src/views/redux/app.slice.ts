import { createSlice } from '@reduxjs/toolkit';
import {AppReducerType} from "./types";
import {GRID_LAYOUT} from "../../helpers/constants";

const initialState: AppReducerType = {
    layout: GRID_LAYOUT,
};

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        layoutHandle(state: AppReducerType, action) {
            state.layout = action.payload;
        },
    },
});

// Login actions
export const appActions = appSlice.actions;

// Reducer
const appReducer = appSlice.reducer;
export default appReducer;
