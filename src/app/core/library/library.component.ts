import { Component, OnInit } from '@angular/core';

import { ScrollBooster } from '../../../assets/scripts/scrollbooster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    let lastKeyStorage = localStorage.getItem('album');

    // Route interdite
    // Vérfication du token et redirection vers la page adéquate
    if (this.router.url === '/library') {
      switch (lastKeyStorage) {
        case 'maple':
          // this.router.navigate(['/library/maple']);
          window.location.href = '/library/maple';
          break;
        case 'banff':
          // this.router.navigate(['/library/banff']);
          window.location.href = '/library/banff';
          break;
        case 'francois':
          // this.router.navigate(['/library/francois']);
          window.location.href = '/library/francois';
          break;
        default:
          this.router.navigate(['/notfound']);
          break;
      }
    }
  }
}
