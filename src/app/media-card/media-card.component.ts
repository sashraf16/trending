import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent implements OnInit{

  trends$: any;

  constructor(private mediaService: MediaService, private store: Store) { }

  ngOnInit() { }
}
