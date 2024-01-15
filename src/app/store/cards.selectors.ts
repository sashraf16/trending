import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { SocialMediasState } from "./cards.reducers";

export const selectSocials = (state: AppState) => state.socialMedias;
export const selectAllSocials = createSelector(
    selectSocials,
    (state: SocialMediasState) => state.medias
)

export const selectTheSocials = createSelector(selectSocials, socials => socials.medias);

export const selector = createFeatureSelector<SocialMediasState>('medias');
export const selector2 = createSelector(selector, (state: SocialMediasState) => state.medias);