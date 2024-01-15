import { createReducer, on } from "@ngrx/store";
import { SocialMedia } from "../models/SocialMedia";
import { addSocial, removeSocial } from "./cards.actions";
import { SocialMediaEnum } from "../models/SocialMediaEnum";

export interface SocialMediasState {
    medias: SocialMedia[],
    error: string;
    status: string | null;
}

export const initialState: SocialMediasState = {
    medias: [{ name: SocialMediaEnum.Twitter}],
    error: '',
    status: 'pending',
}

export const cardReducer = createReducer(
    initialState,
    on(addSocial, (state, { name }) => ({
        ...state,
        media: [...state.medias, { name: name }]
    })),
    on(removeSocial, (state, { name }) => ({
        ...state,
        media: state.medias.filter(x => x.name !== name)
    })),
    // on(loadTrends, (state) => ({
    //     ...state,
    //     media: state.medias
    // })),
    // on(loadTrendsSuccess, (state, action) => ({
    //     ...state,
    //     status: 'success',
    //     media: action.media
    // })),
)