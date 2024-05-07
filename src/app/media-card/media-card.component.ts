import { Component, Input, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Store } from '@ngrx/store';
import { SocialMediaEnum } from '../models/SocialMediaEnum';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent implements OnInit{

  @Input() media: SocialMediaEnum | undefined;
  SocialMediaEnum = SocialMediaEnum;

  constructor(private mediaService: MediaService, private store: Store) { }

  ngOnInit() { }
}
