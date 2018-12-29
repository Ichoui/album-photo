import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor() {
  }

  src;
  name;
  format;

  /*
  *  Mappe la data reçue des components d'albums dans des variables réutilisable via le service
  *  Puis les retransmets au component viewer pour permettre l'accès à ces variables
  *  */
  dataViewer(event) {
    const src = event.target.currentSrc;
    const name = event.target.attributes[3].nodeValue;
    const width = event.target.clientWidth;
    const height = event.target.clientHeight;

    let format;

    if (width >= height) {
      format = 'paysage';
    } else {
      format = 'portrait';
    }


    this.src = src;
    this.name = name;
    this.format = format;
  }
}
