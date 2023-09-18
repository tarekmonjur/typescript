import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import cardReducer, { cardSlice } from './cardSlice';

const store = configureStore({
    reducer: {
        [cardSlice.name]: cardReducer,
    },
    devTools: true,
});

const makeStore = () => store;   

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof store.getState>

export const wrapper = createWrapper<AppStore>(makeStore);