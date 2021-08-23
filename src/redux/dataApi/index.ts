import { createSlice } from '@reduxjs/toolkit';
import { initialize } from '../interface';

const Initialize: initialize = {
    data: []
};

const DataAPI = createSlice(
    {
        name: 'Data API',
        initialState: Initialize,
        reducers: {
            dataAPI: (state, action) => {
                state.data = action.payload;
            },
            clearData: () => Initialize
        }
    }
);

export const { dataAPI } = DataAPI.actions;
export default DataAPI.reducer;
