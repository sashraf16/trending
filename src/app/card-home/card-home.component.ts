import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addSocial, removeSocial } from '../store/cards.actions';
import { SocialMediaEnum } from '../models/SocialMediaEnum';
import { selectAllSocials, selectTheSocials, selector } from '../store/cards.selectors';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit{

  socialList = [{ name: SocialMediaEnum.Twitter }, { name: SocialMediaEnum.YouTube }];

  socials$ = this.store.select(selector);


  constructor(private store: Store) { }

  addSocial(social: SocialMediaEnum) {
    console.log(social);
    this.store.dispatch(addSocial({name: social as SocialMediaEnum}));
  }

  removeSocial(social: SocialMediaEnum) {
    this.store.dispatch(removeSocial({name: social as SocialMediaEnum}));
  }

  ngOnInit(): void {
    // this.socials$ = this.store.select(selector);
    this.store.select(selector).subscribe(s => console.log({s}));
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
