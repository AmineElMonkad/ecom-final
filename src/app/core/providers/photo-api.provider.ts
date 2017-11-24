import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CommonService} from '../../util/common-service';

@Injectable()
export class PhotoApi {


  constructor(public httpClient: HttpClient, private _communServ: CommonService
              // ,@Inject(APP_CONFIG) private config: IAppConfig
  ) {
    this.httpClient = httpClient;
    // console.log("this.config.apiEndpoint "+this.config.apiEndpoint)


  }

  /** send user_name,password
   * recieve null if not exist or User if exist

   * @returns Promise of image
   */

  getImage ( id: number)  {
    console.log('call service getimage')
    const headers = {
      headers: new HttpHeaders()
    }
    headers.headers.append('Content-Type', 'image/*');
    headers.headers.append('Access-Control-Allow-Origin', '*');
    headers.headers.append('Access-Control-Allow-Methods', 'GET');
    headers.headers.append('Access-Control-Allow-Headers', 'Content-Type');

    const params: HttpParams = new HttpParams();
    params.append('id', id.toString());
    // add reject case!!

    // not observe image
   return this.httpClient.get<any>(this._communServ.getFullUrl( id.toString()))
     .subscribe(
       (photo: Response) => {
         console.log('photo provider ' + typeof photo)
         return new Blob([photo.body], {type: 'application/octet-stream'});
       });

    // return new Promise((resolve , reject) => {
    //   this.httpClient.get<Blob>(this.url + '/' + id.toString(),
    //     { headers: new HttpHeaders().append('Content-Type', 'image/*')
    //     })
    //     .toPromise()
    //     .then(res => {
    //         console.log('send ' + typeof res);
    //         resolve( new Blob([photo.body], {type: 'application/octet-stream'}););
    //       },
    //       error => {
    //         console.log('not found ' + error); // rjecet génère une erreur???
    //         // retourner un objet vide
    //         resolve({});
    //       })
    //     .catch(err => {console.log('exception' + this._communServ.stringfyJson(err));
    //       reject({})});
    //
    // });
  }
}
