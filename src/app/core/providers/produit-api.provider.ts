import {Injectable} from "@angular/core";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {CommonService} from "../../util/common-service";
import {Observable} from "rxjs/Observable";
import {Produit} from "../models/produit";

@Injectable()
export class ProduitApi {
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

  /** send all Produits
   * recieve null if not exist or User if exist

   * @returns Observale of Array<Produit>
   */
  getProduits (): Observable<Array<Produit>> {

    return this.http.get<Array<Produit>>(this._communServ.getFullUrl('produit/all'));
  }

  getMinMaxPrix(): Observable<Array<number>> {
    return this.http.get<Array<number>>(this._communServ.getFullUrl('produit/minmax'));
  }

  getProduit(id: number) {
    return this.http.get<Produit>(this._communServ.getFullUrl('produit/' + id));
  }

  getProduitByKeyword(mc: String): Observable<Array<Produit>> {
    return this.http.get<Array<Produit>>(this._communServ.getFullUrl('produit/searchProduct/' + mc));
  }
}
