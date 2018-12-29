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
    this.viewerPopup = true;
    this.viewerService.dataViewer(event);
  }

  closeViewer() {
    // @ts-ignore
    let appViewer = document.getElementsByTagName('app-viewer');
    appViewer[0].style.opacity = 0.0;

    setTimeout(e => {
      this.viewerPopup = false;
    }, 500);

  }

}
