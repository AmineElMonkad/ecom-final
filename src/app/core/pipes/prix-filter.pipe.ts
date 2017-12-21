import { Pipe, PipeTransform } from '@angular/core';
import {CommonService} from "../../util/common-service";

@Pipe({
  name: 'prixFilter'
})
export class PrixFilterPipe implements PipeTransform {

  constructor(private commonService: CommonService) {

  }
  transform(value: any, args?: any): any {
    let result = [];
    if (args === null || args === 0) {
      return value;
    }
    else {
      result = value.filter(
        (produit) => produit.prixUnitaire <  args );

      return result;
    }
  }

}


// import { Pipe, PipeTransform } from '@angular/core';
// import {CommonService} from "../../util/common-service";
//
// @Pipe({
//   name: 'prixFilter'
// })
// export class PrixFilterPipe implements PipeTransform {
//
//   constructor(private commonService: CommonService) {
//
//   }
//   transform(value: any, args?: any): any {
//     let result = [];
//     if (args === null || args === 0) {
//       return value;
//     }
//     else {
//       result = value.filter(
//         (produit) => produit.prixUnitaire === args );
//
//       return result;
//     }
//   }
//
// }
