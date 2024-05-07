import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as CardActions from '../store/cards.actions';
import { SocialMediaEnum } from '../models/SocialMediaEnum';
import { isLoadingSelector, socialsSelector, errorSelector, selectFeature } from '../store/cards.selectors';
import { Observable, concatMap, filter, find, forkJoin, map, of, toArray } from 'rxjs';
import { SocialMedia } from '../models/SocialMedia';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit{

  SocialMediaEnum = SocialMediaEnum;

  // twitterSoc = { name: SocialMediaEnum.Twitter};
  // twitterSoc2 = { name: SocialMediaEnum.Twitter};
  // instagramSoc = { name: SocialMediaEnum.Instagram};

  // totalSocialList = of([{ name: SocialMediaEnum.Twitter }, { name: SocialMediaEnum.YouTube }, { name: SocialMediaEnum.Instagram}]);
  // totalSocialList2 = ([{ name: SocialMediaEnum.Twitter }, { name: SocialMediaEnum.YouTube }, { name: SocialMediaEnum.Instagram}]);
  // usedSocials: any;
  // displaySocials$: any;
  // displaySocials: any;
  // displaySocials3: any;
  // socialList2 = ['Twi', 'you'];


  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  socials$: Observable<SocialMedia[]>;

  tt: Observable<number>;
  ty: Observable<number>;
  ti: Observable<number>;


  constructor(private store: Store<AppState>) { 
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.pipe(select(errorSelector));
    this.socials$ = this.store.pipe(select(socialsSelector));


    this.tt = this.socials$.pipe(map(s => s.findIndex(t => t.name == SocialMediaEnum.Twitter)));
    this.ty = this.socials$.pipe(map(s => s.findIndex(t => t.name == SocialMediaEnum.YouTube)));
    this.ti = this.socials$.pipe(map(x => x.findIndex(t => t.name == SocialMediaEnum.Instagram)));

    // this.displaySocials = this.totalSocialList2.filter(soc => (this.socials$.pipe(map(so => so.map(s => {
    //   var p = !so.includes(soc);
    //   return p;
    // })))))

    // var s = this.socials$.pipe(map(x => x.map(t => t.name == 'Twitter')));
    // console.log({s});


    // this.displaySocials3 = this.store.pipe(select(socialsSelector2));

    // this.displaySocials = this.totalSocialList.filter(x => (this.socials$.pipe(map(s => s.map(t => { return x == t})))));
    // this.displaySocials$ = forkJoin(this.totalSocialList, this.socials$).pipe(map(([arr1, arr2]) => arr1.filter(x => arr2.indexOf(x) === -1)));

    // this.displaySocials = this.totalSocialList.filter(x => this.socials$.pipe(map(s => !s.find( t => t === x))));
    // this.socials$.pipe(map(x => x.filter(s => s === )))
    // this.socials$.subscribe(x => {
    //   console.log(this.totalSocialList2);
    //   console.log({x});
    //   let p = this.totalSocialList2.filter(m => {
    //     console.log(m);
    //     !x.includes(m);
    //   });
    //   var s = this.displaySocials;
    //   console.log({s});
    //   console.log({p});
    // });
    // this.displaySocials = this.totalSocialList.filter(x => !this.usedSocials.includes(x));
    
    // this.test = this.store.select(selectFeature);

    // this.error$ = this.store.select(errorSelector);
    // this.socials$ = this.store.select(socialsSelector);
  }

  // addSocial(social: SocialMediaEnum) {
  //   console.log(social);
  //   this.store.dispatch(addSocial({name: social as SocialMediaEnum}));
  // }

  addSocial(social: SocialMediaEnum) {
    console.log(social);
    this.store.dispatch(CardActions.addSocial({name: social}));
  }

  removeSocial(social: SocialMediaEnum) {
    this.store.dispatch(CardActions.removeSocial({name: social as SocialMediaEnum}));
  }

  log() {
    // var s = this.displaySocials;
    // console.log({s});
    // var s = this.isLoading$.subscribe(x => console.log(x));
    // console.log(s);

    // var t = this.test;
    // console.log(t);
  }

  ngOnInit(): void {
    this.store.dispatch(CardActions.getSocials());
    // this.displaySocials = this.totalSocialList2.filter(soc => this.socials$.pipe(map(s => s.map(t => t.name != soc.name))));

    // this.tt = this.socials$.pipe(map(x => x.map(t => t.name == SocialMediaEnum.Twitter)));


    // this.store.select(medias2).subscribe(x => this.test = x);
    // this.socials$ = this.store.select(selector);
    // this.store.select(selector).subscribe(s => console.log({s}));
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
