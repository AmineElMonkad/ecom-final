import {Injectable} from "@angular/core";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {CommonService} from "../../util/common-service";
import {ProduitPromotion} from "../models/produit-promotion";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProduitPromotionApi {
  _http: HttpClient;
  headers: Headers;
  options: HttpRequest<any>;

  constructor(public http: HttpClient, private _communServ: CommonService
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

  /** send user_name,password
   * recieve null if not exist or User if exist

   * @returns Observale of Array<any>
   */
  getProduitsPromotions (id: number): Observable<ProduitPromotion[]> {
    return this.http.get<ProduitPromotion[]>(this._communServ.getFullUrl('produitPromotion/' + id.toString()));
  }
}
