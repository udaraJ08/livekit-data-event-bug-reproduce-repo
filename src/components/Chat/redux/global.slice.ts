import { createSlice } from '@reduxjs/toolkit';
import {GlobalReducerType} from "./types";

const initialState: GlobalReducerType = {
    chatOpen: false,
};

const globalSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
        chatSectionViewHandle(state: GlobalReducerType, action) {
            state.chatOpen = action.payload;
        },
    },
});

// Login actions
export const globalActions = globalSlice.actions;

// Reducer
const globalReducer = globalSlice.reducer;
export default globalReducer;
