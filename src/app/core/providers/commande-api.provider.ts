
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommonService} from '../../util/common-service';
import {Commande} from '../models/commande';

@Injectable()
export class CommandeApi {
  _http: HttpClient;
  constructor(public http: HttpClient, private _communServ: CommonService) {
    this._http = http;
  }

  ajouterCommande(commande: Commande, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': token.toString()
    });
    const options = {
      headers
    };
    return new Promise((resolve, reject) => {
      this.http.post(this._communServ.getFullUrl('commande/add'), commande
        //, options
          // {headers: {'Content-Type': 'application/json',
          //   'Access-Control-Allow-Origin': '*',
          //   'Access-Control-Allow-Methods': '*',
          //   'Access-Control-Allow-Headers': 'Content-Type',
          //                     'Authorization': token}}
                              )
        .toPromise()
        .then(() => {
       // alert('done')
            resolve({});
          },
          error => {
            reject(error);
          })
        .catch(err => {
          console.log('exception ' + this._communServ.stringfyJson(err));
          reject({}); });

    });

  }
}
