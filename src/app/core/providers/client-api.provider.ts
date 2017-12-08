import {Injectable} from "@angular/core";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {CommonService} from "../../util/common-service";
import {Client} from "../models/client";

@Injectable()
export class ClientApi {
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

  auth(login: string, mdp: string) {
    const body: Client = {login, mdp};
    this.http.post(this._communServ.getFullUrl('client/auth'), body);
  }

  add(client: Client) {
    this.http.put(this._communServ.getFullUrl('client/add'), client);
  }
}
