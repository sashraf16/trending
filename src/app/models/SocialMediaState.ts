import { SocialMedia } from "./SocialMedia";

export interface SocialMediasState {
    medias: SocialMedia[],
    error: string;
    isLoading: boolean;
}