import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  getTwitterTrends(id?: number): Observable<any> {
    if (!(typeof id!='undefined' && id)) { id = 1}
    const url = "https://api.twitter.com/1.1/trends/place.json";
    return this.http.get(url);
  }
}
