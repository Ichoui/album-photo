import { Component, OnInit } from '@angular/core';
import { ViewerService } from './viewer.service';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { zoomIn, zoomOut } from 'ng-animate';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  animations: [
    trigger('zoomIn',[
        transition('* => *', useAnimation(zoomIn),{params: {timing: .5}}),
      ]),
  ]
})
export class ViewerComponent implements OnInit {

  constructor(private viewerService: ViewerService) {
  }

  src;
  name;
  format;

  ngOnInit() {
    this.src = this.viewerService.src;
    this.name = this.viewerService.name;
    this.format = this.viewerService.format;

    this.orientationImage();
  }

  orientationImage() {
    let viewedImage = document.getElementById('viewed-image');
    // console.log(viewedImage);
    console.log(this.format);

    if (this.format === 'landscape') {
      viewedImage.className = 'landscape';
    } else {
      viewedImage.className = 'portrait';
    }
  }


}
