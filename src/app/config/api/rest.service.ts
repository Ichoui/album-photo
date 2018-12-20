import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  getMaple(): Observable<any> {
    return this.http.get('http://api.ichoui.fr/maple');
    // return this.http.get('http://localhost:4620/maple');
  }
}
