import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import confirmed from '../confirmed';
import DataAPI from '../dataApi';

const store = configureStore({
    reducer: {
        confirmation: confirmed,
        apis: DataAPI
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;
