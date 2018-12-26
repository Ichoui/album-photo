import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../config/api/rest.service';
import ScrollBooster from 'scrollbooster';
import { ScriptService } from '../../../config/scripts/scripts.service';


@Component({
  selector: 'app-maple',
  templateUrl: './maple.component.html',
  styleUrls: [
    '../library.component.scss',
    '../../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'
  ]
})

export class MapleComponent implements OnInit {

  public images$ = this.imgService.getMaple();

  constructor(private imgService: RestService, private script:ScriptService) {
  }

  ngOnInit() {
    this.scrollBooster();
    this.script.load('app').then(data => data);
    let images = document.querySelectorAll('.grid');
    console.log(images.clientHeight);
    // essayer de renverse portrait image


  }

  scrollBooster() {
    let viewport = document.querySelector('.viewport');
    let content = document.querySelector('.content');
    let sb = new ScrollBooster({
      viewport: viewport, // required
      content: content, // required
      // handle: document.querySelector('.grid'),
      bounce: true,
      onUpdate: (data) => {
        content.style.transform = `translate(
      ${-data.position.x}px,
      ${-data.position.y}px )`;
      },

    });
  }


}
