import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { SocialMediasState } from "../models/SocialMediaState";

// const ordersFeature = createFeatureSelector(Features.Orders); 
// // always keep an enum of Features
// const allOrders = createSelector(ordersFeature, orders => orders.list);
// const ordersLoading = createSelector(ordersFeature, orders => orders.loading.list);
// const selectedOrders = createSelector(ordersFeature, orders => orders.selectedOrders);

export const selectFeature = (state: AppState) => state.socialMedias;

export const isLoadingSelector = createSelector(
    selectFeature, 
    (state: SocialMediasState) => state.isLoading
);

export const socialsSelector = createSelector(
    selectFeature, 
    (state) => state.medias
);

export const errorSelector = createSelector(
    selectFeature, 
    (state) => state.error
);

// export const selectAllSocials = createSelector(
//     selectSocials,
//     (state: SocialMediasState) => state.medias
// )

// export const selectTheSocials = createSelector(selectSocials, socials => socials.medias);

// export const selector = createFeatureSelector<SocialMediasState>('medias');
// export const medias2 = createSelector(selector, state => state.medias);