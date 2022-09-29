import { createSlice } from '@reduxjs/toolkit';

import {IScreenSize} from './interfaces';

const initialState: IScreenSize = {
    width: 0,
    height: 0,
};

export const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setScreenSize: (state: IScreenSize, { payload }) => {
            state.width = payload.width;
            state.height = payload.height;
        },
    },
});

export const { setScreenSize } = screenSlice.actions;

export default screenSlice.reducer;