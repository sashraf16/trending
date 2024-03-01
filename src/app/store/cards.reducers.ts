import { createReducer, on } from "@ngrx/store";
import * as CardActions from "./cards.actions";
import { SocialMediasState } from "../models/SocialMediaState";

export const initialState: SocialMediasState = {
    medias: [],
    error: '',
    isLoading: false,
}

export const cardReducer = createReducer(
    initialState,
    on(CardActions.getSocials, (state) => ({
        ...state,
        isLoading: true
    })),
    on(CardActions.getApiSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        medias: action.socials
    })),
    on(CardActions.getApiFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    })),
    on(CardActions.addSocial, (state, { name: SocialMediaEnum }) => ({
        ...state,
        medias: [...state.medias, { name: SocialMediaEnum }]
    })),
    on(CardActions.removeSocial, (state, { name }) => ({
        ...state,
        medias: state.medias.filter(x => x.name !== name)
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