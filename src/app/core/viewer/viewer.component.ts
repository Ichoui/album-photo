import { Component, OnInit } from '@angular/core';
import { ViewerService } from './viewer.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
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

    this.formatImage();
    document.getElementById('close').className = 'close';
    console.log(document.getElementById('close'));
  }

  formatImage() {

    let viewedImage = document.getElementById('viewed-image');
    console.log(viewedImage);
    console.log(this.format);
    if (this.format === 'paysage') {
      viewedImage.className = 'widther'
    } else {
      viewedImage.className = 'heighter'
    }
  }


}
