import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../config/api/rest.service';
import { ScriptService } from '../../../config/scripts/scripts.service';
import ScrollBooster from 'scrollbooster';


@Component({
  selector: 'app-maple',
  templateUrl: './maple.component.html',
  styleUrls: ['../library.component.scss', '../../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})

export class MapleComponent implements OnInit {

  public images$ = this.imgService.getMaple();

  constructor(private imgService: RestService) {
  }

  ngOnInit() {
    let viewport = document.querySelector('.viewport');
    let content = document.querySelector('.content');
    let sb = new ScrollBooster({
      viewport: viewport, // required
      content: content, // required
      handle: document.querySelector('.grid'),
      bounce: true,
      onUpdate: (data) => {
        content.style.transform = `translate(
      ${-data.position.x}px,
      ${-data.position.y}px )`;
      },

    });
  }


}
