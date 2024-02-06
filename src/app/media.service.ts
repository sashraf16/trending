import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable, delay, of } from 'rxjs';
import { SocialMedia } from './models/SocialMedia';
import { SocialMediaEnum } from './models/SocialMediaEnum';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getTwitterTrends(id?: number): Observable<any> {
    if (!(typeof id!='undefined' && id)) { id = 1}
    const url = "https://api.twitter.com/1.1/trends/place.json" + "?id=" + id;
    return this.http.get(url);
  }

  getSocials(): Observable<SocialMedia[]> {
    const socials = [ { name: SocialMediaEnum.Twitter }, { name: SocialMediaEnum.YouTube}];
    return of(socials).pipe(delay(2000));
  }
}
