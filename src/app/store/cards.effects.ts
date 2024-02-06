import { Injectable } from "@angular/core";
import { MediaService } from "../media.service";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CardActions from './cards.actions'

@Injectable()
export class CardsEffects {

    getSocials$ = createEffect(() =>
        this.actions$.pipe(ofType(CardActions.getSocials), mergeMap(() => {
            return this.mediaService.getSocials().pipe(
                map(socials => CardActions.getApiSuccess({ socials })),
                catchError((error) =>
                    of(CardActions.getApiFailure({ error: error.message }))
                )
            );
        }))
    )

    constructor(
        private actions$: Actions,
        private mediaService: MediaService
    ) { }

    // loadAllArticles$ = createEffect(() => this.actions$.pipe(
    //     ofType(fromActions.ShowAllAction),
    //     switchMap(() =>
    //       this.mediaService.getTwitterTrends().pipe(
    //         map(data => fromActions.ShowAllSuccessAction({payload: data}))
    //       )
    //     )
    //   ));

    // loadAllTrends$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CardActions.loadTrends),
    //         mergeMap(() => {
    //             return this.mediaService.getTwitterTrends().pipe(
    //                 map((data => CardActions.loadTrendsSuccess({ media: data }))));
    //         })
    //     )
    // );

    // @Effect()
    // loadMovies$ = this.actions$
    //     .pipe(
    //         ofType('[Movies Page] Load Movies'),
    //         mergeMap(() => this.mediaService.getTwitterTrends()
    //             .pipe(
    //                 map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
    //                 catchError(() => EMPTY)
    //             ))
    //     )
    // );

}