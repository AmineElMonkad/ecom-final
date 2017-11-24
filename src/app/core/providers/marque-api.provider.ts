import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {CommonService} from "../../util/common-service";
import {Observable} from "rxjs/Observable";
import {Marque} from "../models/marque";

@Injectable()
export class MarqueApi {
  _http: HttpClient;
  headers: Headers;
  options: HttpRequest<any>;

  constructor( private http: HttpClient, private _communServ: CommonService
              // ,@Inject(APP_CONFIG) private config: IAppConfig
  ) {
    this._http = http;
    // console.log("this.config.apiEndpoint "+this.config.apiEndpoint)

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');

  }

  /** send all marques
   * recieve null if not exist or User if exist

   * @returns Observale of Array<Marque>
   */
  getMarques (): Observable<Array<Marque>> {

    return this.http.get<Array<Marque>>(this._communServ.getFullUrl('marque/all'));
  }
}
