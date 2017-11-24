
import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {CommonService} from '../../util/common-service';
import {Observable} from 'rxjs/Observable';
import {Promotion} from '../models/promotion';

@Injectable()
export class PromotionApi {
  _http: HttpClient;
  headers: Headers;
  options: HttpRequest<any>;

  constructor( private http: HttpClient, private _communServ: CommonService) {
    this._http = http;

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');

  }

  /** send promotions en cours
   * recieve null if not exist or User if exist

   * @returns Observale of Array<Promotion>
   */
  getPromotions (): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this._communServ.getFullUrl('promotion/encours'));
  }
}
