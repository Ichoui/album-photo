import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../config/api/rest.service';
import { Observable } from 'rxjs/internal/Observable';
import { ImagesModel } from '../../../config/models/images.model';

@Component({
  selector: 'app-maple',
  templateUrl: './maple.component.html',
  styleUrls: ['../library.component.scss']
})
export class MapleComponent implements OnInit {

  public $image: ImagesModel[];
  images;

  constructor(private imgService: RestService) {

  }

  ngOnInit() {
    this.imgService.getMaple()
      .subscribe((img: ImagesModel) => this.imgService = {
        // this.$image = img;
        _id: img['id'],
        name: img['name'],
        filepath: img['filepath']
      });

    console.log(this.$image);
  }

}
