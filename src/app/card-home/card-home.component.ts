import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as CardActions from '../store/cards.actions';
import { SocialMediaEnum } from '../models/SocialMediaEnum';
import { isLoadingSelector, socialsSelector, errorSelector, selectFeature } from '../store/cards.selectors';
import { Observable } from 'rxjs';
import { SocialMedia } from '../models/SocialMedia';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit{

  socialList = [{ name: SocialMediaEnum.Twitter }, { name: SocialMediaEnum.YouTube }];
  socialList2 = ['Twi', 'you'];

  // socials$: Observable<SocialMedia[]> = this.store.select(medias2)
  // socials$:any= this.store.select(medias2)
  // test: any;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  socials$: Observable<SocialMedia[]>;
  test: any;


  constructor(private store: Store<AppState>) { 
    // this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isLoading$ = this.store.select(isLoadingSelector);
    // this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector));
    this.socials$ = this.store.pipe(select(socialsSelector));

    this.test = this.store.select(selectFeature);
    // this.error$ = this.store.select(errorSelector);
    // this.socials$ = this.store.select(socialsSelector);
  }

  // addSocial(social: SocialMediaEnum) {
  //   console.log(social);
  //   this.store.dispatch(addSocial({name: social as SocialMediaEnum}));
  // }

  addSocial(social: string) {
    console.log(social);
    this.store.dispatch(CardActions.addSocial({name: social}));
  }

  removeSocial(social: SocialMediaEnum) {
    this.store.dispatch(CardActions.removeSocial({name: social as SocialMediaEnum}));
  }

  log() {
    var s = this.isLoading$.subscribe(x => console.log(x));
    console.log(s);

    // var t = this.test;
    // console.log(t);
  }

  ngOnInit(): void {
    // this.store.select<boolean>(isLoadingSelector).subscribe(x => {
    //   this.test = x
    //   console.log({x});
    // });

    this.test = this.store.select((store) => store.socialMedias);
    this.store.dispatch(CardActions.getSocials());

    let s = this.test;
    console.log({s});
    // this.store.select(medias2).subscribe(x => this.test = x);
    // this.socials$ = this.store.select(selector);
    // this.store.select(selector).subscribe(s => console.log({s}));
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
