import { Component, OnInit } from '@angular/core';
import {Promotion} from '../../core/models/promotion';
import {CommonService} from '../../util/common-service';
import {ProduitPromotionApi} from '../../core/providers/produit-promotion-api';
import {PromotionApi} from '../../core/providers/promotion-api';
import {Category} from "../../core/models/category";

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
  , providers: [ ProduitPromotionApi, PromotionApi, CommonService]
})
export class PromotionListComponent implements OnInit {
  listPromotions: Array<Promotion> = null;



  constructor(private _commonService: CommonService, private _promotionService: PromotionApi, private _produitPromotionService: ProduitPromotionApi) { }

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

}
