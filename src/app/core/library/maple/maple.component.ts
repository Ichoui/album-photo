import { Component, Input, OnInit } from '@angular/core';
import { RestService } from '../../../config/api/rest.service';
import ScrollBooster from 'scrollbooster';
import { ScriptService } from '../../../config/scripts/scripts.service';
// declare var $:JQueryStatic;
declare var jQuery: any;


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
  hideScrollbar = true;

  constructor(private imgService: RestService, private script: ScriptService) {
  }

  ngOnInit() {
    this.scrollBooster();
    this.script.load('app').then(data => data);
    let content = document.querySelector('.content');
    setTimeout(function () {
      console.log(test.offsetHeight);
      // content['style'].minHeight = content.offsetHeight + 'px';
      content['style'].maxHeight = "250px";
    }, 1500);
  }

  scrollBooster() {
    let viewport = document.querySelector('.viewport');
    let content = document.querySelector('.content');

    let sb = new ScrollBooster({
      viewport: viewport, // required
      content: content, // required
      bounce: false,
      emulateScroll: false,

      textSelection: false,
      onUpdate: (data) => {
        // console.log(data);
        content['style'].transform = `translate3d(
          ${-data.position.x}px,
          ${-data.position.y}px, 0 )`;

      },

    });
  }


}
