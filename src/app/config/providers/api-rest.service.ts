import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Toto } from '../models/images.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) {
  }

  getMaple(): Observable<Toto[]> {
    return this.http.get('http://api2.ichoui.fr/maple').pipe(
    // @ts-ignore
      map(data => data.images)
    );
  }

  getFrancois(): Observable<Toto[]> {
    return this.http.get('http://api2.ichoui.fr/francois').pipe(
      // @ts-ignore
      map(data => data.images)
    );
  }

  getBanff(): Observable<Toto[]> {
    return this.http.get('http://api2.ichoui.fr/banff').pipe(
      // @ts-ignore
      map(data => data.images)
    );
  }

  getJump(): Observable<Toto[]> {
    return this.http.get('http://api2.ichoui.fr/jump').pipe(
      // @ts-ignore
      map(data => data.images)
    );
  }
}
