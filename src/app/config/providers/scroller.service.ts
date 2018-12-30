import { Injectable } from '@angular/core';
import ScrollBooster from 'scrollbooster';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {

  constructor() { }

  scrollBooster() {
    let viewport = document.querySelector('.viewport');
    let content = document.querySelector('.grid');

    let sb = new ScrollBooster({
      viewport: viewport, // required
      content: content, // required
      bounce: false,
      emulateScroll: false,
      textSelection: false,
      onUpdate: (data) => {
        content['style'].transform = `translate(
          ${-data.position.x}px,
          ${-data.position.y}px
           `;
        // content['style'].minHeight = content.offsetHeight + 'px';

      },
    });

  }

}
