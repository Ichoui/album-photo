import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../../config/providers/api-rest.service';
import { ScriptService } from '../../../config/providers/scripts.service';
import { ViewerService } from '../../viewer/viewer.service';
import { ScrollerService } from '../../../config/providers/scroller.service';

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

  constructor(private imgService: ApiRestService,
              private scriptService: ScriptService,
              private viewerService: ViewerService,
              private scrollerService: ScrollerService) {
  }

  ngOnInit() {
    this.scrollerService.scrollBooster();
    // this.scriptService.load('app').then(data => data);
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
