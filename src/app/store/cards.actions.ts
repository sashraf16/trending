import { createAction, props } from "@ngrx/store";
import { SocialMediaEnum } from "../models/SocialMediaEnum";


export const addSocial = createAction('[card-home] Add to Socials', props<{ name: SocialMediaEnum }>())
export const removeSocial = createAction('[card-home] Remove from Socials', props<{ name: SocialMediaEnum }>())

// export const loadTrends = createAction('[media-card] Load Trends')

// export const loadTrendsSuccess = createAction(
//     '[media-card] Trends Load success',
//     props<{ media: any }>()
// );