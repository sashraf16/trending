import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Store, select } from '@ngrx/store';
import { loadTrends } from '../store/cards.actions';
import { selectAllSocials } from '../store/cards.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent implements OnInit{

  // trends$ = this.store.pipe(select(selectAllSocials));
  trends$: any;

  constructor(private mediaService: MediaService, private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadTrends());
     this.mediaService.getTwitterTrends().subscribe( data => {
      this.trends$ = data
     }
    )
  }

}
