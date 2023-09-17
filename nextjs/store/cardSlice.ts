import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from './store';
import cardJsonData from './card.json';

interface ICard {
    id: number;
    name: string;
    amount: number;
    description: string;
};

type cardState = {
    cards: ICard[]
}

const initialState: cardState = {
    cards: cardJsonData
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
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action,
            };
        }
    }
});

export const selectCards = (state: AppState) => state.cardSlice.cards;
export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;