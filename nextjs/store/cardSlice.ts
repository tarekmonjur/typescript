import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from './store';

export interface ICard {
    id: number;
    name: string;
    amount: number;
    description: string;
};

type cardState = {
    cards: ICard[],
    [key: string]: any,
}

const initialState: cardState = {
    cards: []
};

export const cardSlice = createSlice({
    name: 'cardSlice',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<ICard>) => {
            state.cards = [
                ...state.cards,
                action.payload
            ];
        },
        getCards: (state, action: PayloadAction<ICard[]>) => {
            state.cards = [...action.payload];
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                // ...action.payload,
                ...action.payload?.cardSlice
            };
        }
    }
});

export const selectCards = (state: AppState) => state.cardSlice.cards;

export const cardSelector = createSelector(selectCards, cards => {
    return ([...cards] || []).sort((a,b) => b.id-a.id);
});

export const { addCard, getCards } = cardSlice.actions;
export default cardSlice.reducer;