import {Component,  OnInit, ViewEncapsulation} from '@angular/core';
import {Produit} from '../../core/models/produit';
import {CommonService} from '../../util/common-service';
import {ProduitApi} from '../../core/providers/produit-api.provider';
import {ActivatedRoute,  Router} from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-produit-search',
  templateUrl: './produit-search.component.html',
  styleUrls: ['./produit-search.component.scss'],
  providers: [ProduitApi, CommonService]
})
export class ProduitSearchComponent implements OnInit {

  listProduits: Array<Produit>;
  mc: String;
  isFound: boolean = true;

  constructor(public _commonService: CommonService, private _produitApi: ProduitApi
    , public route: ActivatedRoute, public router: Router) {
    this.mc = route.snapshot.params['mc'];
  }


  ngOnInit() {
    this.getProductByKeyword();
  }

  getProductByKeyword() {
    this._produitApi.getProduitByKeyword(this.mc).subscribe(
      (produits) => {
        this.listProduits = produits;
        if (this.listProduits.length === 0) {
          this.isFound = false;
        }
      }
    );
  }


}
