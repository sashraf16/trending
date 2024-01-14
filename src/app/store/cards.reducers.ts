import { createReducer, on } from "@ngrx/store";
import { addToCard, loadTrends, loadTrendsSuccess, removeFromCard } from "./cards.actions";
import { SocialMediaEnum } from "../models/SocialMediaEnum";
import { SocialMedia } from "../models/SocialMedia";

export interface SocialMediasState {
    medias: SocialMedia[],
    error: string;
    status: string | null;
}

export const initialState: SocialMediasState = {
    medias: [],
    error: '',
    status: 'pending',
}

export const cardReducer = createReducer(
    initialState,
    on(addToCard, (state, { id }) => ({
        ...state,
        media: [...state.medias, { id: id }]
    })),
    on(removeFromCard, (state, { id }) => ({
        ...state,
        media: state.medias.filter(x => x.id !== id)
    })),
    on(loadTrends, (state) => ({
        ...state,
        media: state.medias
    })),
    on(loadTrendsSuccess, (state, action) => ({
        ...state,
        status: 'success',
        media: action.media
    })),
)