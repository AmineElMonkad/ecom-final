import { Component, OnInit } from '@angular/core';
import {Promotion} from '../../core/models/promotion';
import {CommonService} from '../../util/common-service';
import {ProduitPromotionApi} from '../../core/providers/produit-promotion-api.provider';
import {PromotionApi} from '../../core/providers/promotion-api.provider';
import {Category} from "../../core/models/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
  , providers: [ ProduitPromotionApi, PromotionApi, CommonService]
})
export class PromotionListComponent implements OnInit {
  listPromotions: Array<Promotion> = null;



  constructor(private _commonService: CommonService, private _promotionService: PromotionApi, private _produitPromotionService: ProduitPromotionApi, public router: Router) { }

  ngOnInit() {
     this.getPendingPromotions();
    }

  getPendingPromotions() {
    this._promotionService.getPromotions()
      .subscribe(promotions => {
        this.listPromotions = promotions;
        promotions.forEach(
          promo => {
            this._produitPromotionService.getProduitsPromotions(promo.id).subscribe(
              prod => {
                promo.listProduit = prod;
              }
            );
          }
        );
      });
  }

  getDetails(produitId: number, taux?: number, pourcentage?: number) {
    this.router.navigate(['produit/details', {id: produitId, isPromotion: true, taux: taux, pourc: pourcentage}]);
  }

}
