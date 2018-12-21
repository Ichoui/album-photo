import { Component } from '@angular/core';
import { RestService } from '../../../config/api/rest.service';

@Component({
  selector: 'app-maple',
  templateUrl: './maple.component.html',
  styleUrls: ['../library.component.scss']
})
export class MapleComponent {

  public images$ = this.imgService.getMaple();

  constructor(private imgService: RestService) {}

}
