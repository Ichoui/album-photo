import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../../config/providers/api-rest.service';
import { ScriptService } from '../../../config/providers/scripts.service';
import { ViewerService } from '../../viewer/viewer.service';
import { ScrollerService } from '../../../config/providers/scroller.service';

@Component({
  selector: 'app-banff',
  templateUrl: './banff.component.html',
  styleUrls: [
    '../library.component.scss',
    '../../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'
  ]
})

export class BanffComponent implements OnInit {

  public images$ = this.imgService.getBanff();
  hideScrollbar = true;
  viewerPopup = false;

  constructor(private imgService: ApiRestService,
              private scriptService: ScriptService,
              private viewerService: ViewerService,
              private scrollerService: ScrollerService) {
  }

  ngOnInit() {
    this.scrollerService.scrollBooster();
    this.scriptService.load('app').then(data => data);
  }


  openViewer(event) {
    this.viewerPopup = true;
    this.viewerService.dataViewer(event);
  }

  closeViewer() {
    let appViewer = document.getElementsByTagName('app-viewer');
    // @ts-ignore
    appViewer[0].style.opacity = 0.0;

    setTimeout(e => {
      this.viewerPopup = false;
    }, 500);
  }

}
