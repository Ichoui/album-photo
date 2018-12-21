import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Toto } from '../models/images.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  getMaple(): Observable<Toto> {
    return this.http.get('http://api.ichoui.fr/maple').pipe(
      map(data => data.images),
    );
  }
}
