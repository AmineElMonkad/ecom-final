

import {Injectable} from '@angular/core';


import {CommonService} from '../../util/common-service';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import {Category} from '../models/category';

@Injectable()
export class CategoryApi {
  _http: HttpClient;
  headers: Headers;
  options: HttpRequest<any>;

  constructor(public http: HttpClient, private _communServ: CommonService
              // ,@Inject(APP_CONFIG) private config: IAppConfig
  ) {
    this._http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');

  }

  /** send user_name,password
   * recieve null if not exist or User if exist

   * @returns Observale of Array<any>
   */
  getCategories (): Observable<Category[]> {
    return this.http.get<Category[]>(this._communServ.getFullUrl('category/all'));
  }
}
