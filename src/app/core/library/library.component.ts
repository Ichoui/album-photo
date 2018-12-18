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
    console.log(lastKeyStorage);
/*    if (this.router.url === '/library') {
      console.log(this.router.url);
      if (lastKeyStorage === 'maple123') {
        // redirect vers /library/maple
      }
      // ...
    }*/
  }
}
