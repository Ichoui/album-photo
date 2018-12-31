import { Component, OnInit } from '@angular/core';
import { ViewerService } from './viewer.service';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { zoomIn, zoomOut } from 'ng-animate';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  animations: [
    trigger('zoomIn', [
      transition('* => *', useAnimation(zoomIn), {params: {timing: .5}}),
    ]),
  ]
})
export class ViewerComponent implements OnInit {

  constructor(private viewerService: ViewerService) {
  }

  src;
  name;
  format;
  nameAppear = false; // choisir si on affiche ou non le nom d'image
  angle = 0;

  ngOnInit() {
    this.src = this.viewerService.src;
    this.name = this.viewerService.name;
    this.format = this.viewerService.format;

    this.orientationImage();
  }

  /*
  * Permet de définir l'orientation de l'image
  * */
  orientationImage() {
    let viewedImage = document.getElementById('viewed-image');

    if (this.format === 'landscape') {
      viewedImage.className = 'landscape';
    } else {
      viewedImage.className = 'portrait';
    }
  }

  /*
  * Rotate de -90deg par clic
  * */
  rotateLeft(): void {
    let viewedImage = document.getElementById('viewed-image');

    this.angle = this.angle - 90;
    viewedImage.style.transform = 'rotate(' + this.angle + 'deg)';
    this.checkingFormat(viewedImage, 'portrait-landscape');
  }

  /*
  * Rotate de +90deg par clic
  * */
  rotateRight(): void {
    let viewedImage = document.getElementById('viewed-image');
    this.angle = this.angle + 90;
    viewedImage.style.transform = 'rotate(' + this.angle + 'deg)';
    this.checkingFormat(viewedImage, 'portrait-landscape');
  }


  checkingFormat(image, cls) {
    if (this.hasClass(image, cls)) {
      image.className = 'portrait'
    } else {
      image.className = 'portrait-landscape'
    }
  }
  /*
  * Fonction - méthode qui définit si un élément possède une classe précise
  * Retourne : TRUE / FALSE
  * */
  hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
