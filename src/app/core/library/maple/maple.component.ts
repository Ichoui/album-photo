import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../config/api/rest.service';

@Component({
  selector: 'app-maple',
  templateUrl: './maple.component.html',
  styleUrls: ['../library.component.scss']
})
export class MapleComponent implements OnInit {

  constructor(private imgService: RestService) {
    console.log(this.imgService.getMaple().subscribe(images => {
        console.log(images);
      }));
  }

  ngOnInit() {

  }

}
