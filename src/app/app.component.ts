import {Component} from '@angular/core';
import {MarqueApi} from './core/providers/marque-api.provider';
import {CommonService} from './util/common-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  , providers: [ MarqueApi, CommonService]
})
export class AppComponent {
  title = 'app';

  constructor( ) {}

  ngOnInit() {
  }

}
