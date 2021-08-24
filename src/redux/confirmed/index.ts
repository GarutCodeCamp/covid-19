import { createSlice } from '@reduxjs/toolkit';
import { initialize } from '../interface';

const Initialize: initialize = {
    confirm: [],
    dataAPI: []
};

const confirmed = createSlice(
    {
        name: 'Confirm',
        initialState: Initialize,
        reducers: {
            confimrs: (state, action) => {
                state.confirm = action.payload;
            },
            clearConfirm: () => Initialize
        }
    }
);

export const { confimrs } = confirmed.actions;
export default confirmed.reducer;
