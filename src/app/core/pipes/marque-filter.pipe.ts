import { Pipe, PipeTransform } from '@angular/core';
import {CommonService} from '../../util/common-service';
import {Marque} from '../models/marque';

@Pipe({
  name: 'marqueFilter'
})
export class MarqueFilterPipe implements PipeTransform {

  constructor(private commonService: CommonService) {

  }
  transform(produitList: any, args?: Array<Marque>): any {
    produitList.forEach(
      produit => {
        produit.isSelected = true;
        // console.log(this.commonService.stringfyJson(produit))
      }
    );
    if (args === null || args.length === 0) return produitList;
    let result = [];
    let resultFinal = [];

    args.forEach(marqueSelected =>  result.push(produitList.filter(item => (+marqueSelected.id) === (+item.marque.id))));

    // resultat tableau de chaque produits de marque
    // pour afficher les produits selectionner il faut parcourir tous les résutats
    // pour chaque résultat parcourir tous les produits de cette marque
    result.forEach(resultat => resultat.forEach( produit => resultFinal.push(produit)));
    // result = produitList.filter(item => args.forEach(marqueSelected =>  (+marqueSelected.id) === (+item.marque.id)));
    return resultFinal;
  }
}



// import { Pipe, PipeTransform } from '@angular/core';
// import {CommonService} from '../../util/common-service';
// import {Marque} from '../models/marque';
//
// @Pipe({
//   name: 'marqueFilter'
// })
// export class MarqueFilterPipe implements PipeTransform {
//
//   constructor(private commonService: CommonService) {
//
//   }
//   transform(produitList: any, args?: Array<Marque>): any {
//     produitList.forEach(
//       produit => {
//         produit.isSelected = true;
//         // console.log(this.commonService.stringfyJson(produit))
//       }
//     );
//     if (args === null || args.length === 0) return produitList;
//     let result = [];
//     let resultFinal = [];
//
//     args.forEach(marqueSelected =>  result.push(produitList.filter(item => (+marqueSelected.id) === (+item.marque.id))));
//
//     // resultat tableau de chaque produits de marque
//     // pour afficher les produits selectionner il faut parcourir tous les résutats
//     // pour chaque résultat parcourir tous les produits de cette marque
//     result.forEach(resultat => resultat.forEach( produit => resultFinal.push(produit)));
//     // result = produitList.filter(item => args.forEach(marqueSelected =>  (+marqueSelected.id) === (+item.marque.id)));
//     return resultFinal;
//   }
// }
//
