import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor() {}

  src;
  name;
  format;

  dataViewer(src, name, format) {
    this.src = src;
    this.name = name;
    this.format = format;
  }
}
