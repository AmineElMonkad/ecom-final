import {Component, SecurityContext} from '@angular/core';
import {CategoryApi} from './core/providers/category-api.provider';
import {MarqueApi} from './core/providers/marque-api.provider';
import {Marque} from './core/models/marque';
import {CommonService} from './util/common-service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  , providers: [ MarqueApi, CommonService]
})
export class AppComponent {
  title = 'app';

  constructor( private _marqueApi: MarqueApi, private _commonService: CommonService) {}

  ngOnInit() {
  }

}
