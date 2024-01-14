import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { cardReducer } from './store/cards.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CardsEffects } from './store/cards.effects';

@NgModule({
  declarations: [
    AppComponent,
    MediaCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    StoreModule.forRoot({mediaCards: cardReducer}),
    EffectsModule.forRoot([CardsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
