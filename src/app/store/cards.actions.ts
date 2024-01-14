import { createAction, props } from "@ngrx/store";
import { SocialMediaEnum } from "../models/SocialMediaEnum";


export const addToCard = createAction('[card-home] Add to Cards', props<{ id: SocialMediaEnum }>())
export const removeFromCard = createAction('[card-home] Remove from Cards', props<{ id: SocialMediaEnum }>())

export const loadTrends = createAction('[media-card] Load Trends')

export const loadTrendsSuccess = createAction(
    '[media-card] Trends Load success',
    props<{ media: any }>()
);