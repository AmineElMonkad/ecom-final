import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {CommonService} from "../../util/common-service";
import {Client} from "../models/client";
import {reject} from "q";
@Injectable()
export class ClientApi {
  _http: HttpClient;
  headers: Headers;
  options: HttpRequest<any>;

  constructor(public http: HttpClient, private _communServ: CommonService
              // ,@Inject(APP_CONFIG) private config: IAppConfig
  ) {
    this._http = http;
    /*this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');*/

  }

  authentification(client: Client): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': 'Content-Type'
    });

    const options = {
      headers
    };
    return new Promise((resolve) => {
      this.http.post(this._communServ.getFullUrl('client/auth'), client)
        .toPromise()
        .then(res => {
            resolve(res);
          },
          error => {
           resolve(error.error.mdp); // rjecet génère une erreur???
            // retourner un objet vide
           // resolve({});
          })
        .catch(err => {
          console.log('exception ' + this._communServ.stringfyJson(err));
          reject({}); });

    });

  }

  add(client: Client) {
    return new Promise((resolve,reject) => {
    this.http.post(this._communServ.getFullUrl('client/add'), client).toPromise()
      .then(added => {
          resolve(added);
        },
        error => {
        // alert('error ' + this._communServ.stringfyJson(error))
          reject(error); // rjecet génère une erreur???
          // retourner un objet vide
          // resolve({});
        })
      .catch(err => {
        console.log('exception ' + this._communServ.stringfyJson(err));
        reject({}); });

    });
  }
}
