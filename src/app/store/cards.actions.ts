import { createAction, props } from "@ngrx/store";
import { SocialMediaEnum } from "../models/SocialMediaEnum";
import { SocialMedia } from "../models/SocialMedia";


export const getSocials = createAction('[card-home] Get Socials');
export const getApiSuccess = createAction('[card-home] Get Socials success', props<{ socials: SocialMedia[] }>());
export const getApiFailure = createAction('[card-home] Get Socials failure', props<{ error: string}>());

export const addSocial = createAction('[card-home] Add to Socials', props<{ name: SocialMediaEnum }>())
export const removeSocial = createAction('[card-home] Remove from Socials', props<{ name: SocialMediaEnum }>())

// export const loadTrends = createAction('[media-card] Load Trends')

// export const loadTrendsSuccess = createAction(
//     '[media-card] Trends Load success',
//     props<{ media: any }>()
// );