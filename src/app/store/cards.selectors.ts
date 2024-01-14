import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectCards = (state: AppState) => state.socialMedias;
export const selectAllSocials = createSelector(
    selectCards,
    (state) => state.medias
)