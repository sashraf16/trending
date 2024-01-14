import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCard, removeFromCard } from '../store/cards.actions';
import { SocialMediaEnum } from '../models/SocialMediaEnum';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent {

  // public mediaCards = this.store.select(selectAllCards);

  constructor(private store: Store<{mediaCards: any}>) {}

  // addToCards() {
  //   this.store.dispatch(addToCard(SocialMediaEnum));
  // }

  // removeFromCards() {
  //   this.store.dispatch(removeFromCard(SocialMediaEnum.YouTube));
  // }
}
