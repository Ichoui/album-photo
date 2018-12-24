import { Component, Input, OnInit } from '@angular/core';
import { RestService } from '../../../config/api/rest.service';
import { ScriptService } from '../../../config/scripts/scripts.service';


@Component({
  selector: 'app-maple',
  templateUrl: './maple.component.html',
  styleUrls: ['../library.component.scss', '../../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})

export class MapleComponent implements OnInit {

  public images$ = this.imgService.getMaple();

  constructor(private imgService: RestService, private scriptService: ScriptService) {
  }

  ngOnInit() {
  }

}
