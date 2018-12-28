import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../config/api/rest.service';
import ScrollBooster from 'scrollbooster';
import { ScriptService } from '../../../config/scripts/scripts.service';
import { ViewerService } from '../../viewer/viewer.service';

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
  viewerPopup = false;

  constructor(private imgService: RestService,
              private scriptService: ScriptService,
              private viewerService: ViewerService) {
  }

  ngOnInit() {
    this.scrollBooster();

    // this.scriptService.load('app').then(data => data);
    // tests
    /* let content = document.querySelector('.content');
     setTimeout(function () {
       // console.log(content.offsetHeight);
       // content['style'].minHeight = content.offsetHeight + 'px';
       // content['style'].minHeight = "250px";
     }, 1500);*/
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
        content['style'].transform = `translate(
          ${-data.position.x}px,
          ${-data.position.y}px
           `;
        // content['style'].minHeight = content.offsetHeight + 'px';

      },
    });

  }

  openViewer(event) {
    console.log(event);
    this.viewerPopup = true;
    let src = event.target.currentSrc;
    let name = event.target.attributes[3].nodeValue;
    let width = event.target.clientWidth;
    let height = event.target.clientHeight;
    let format;

    if (width >= height) {
      format = 'paysage';
    } else {
      format = 'portrait';
    }

    this.viewerService.dataViewer(src, name, format);
  }

  closeViewer(event) {
    this.viewerPopup = false;
  }

}
