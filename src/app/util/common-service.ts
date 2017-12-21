import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";

@Injectable()
export class CommonService {


  constructor() {
  }


  /*----------------- Date ------------------------- */
  toDate(date: any): Date {
    return new Date(date);
  }
  /*----------------- String ------------------------- */
  stringfyJson(o: Object): string{
    var cache = [];
    return JSON.stringify(o, function(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
  }

  public getFullUrl(url: string): string {
    return environment.API_ENDPOINT + url;
  }

  /*----------------- Objects -------------------------- */
  isEmptyObject(obj?:any):boolean {
    return (typeof obj ==="undefined" || obj == null || obj.length === 0 || this.stringfyJson(obj) === "{}")
  }



  /*----------------- Images -------------------------- */

}
