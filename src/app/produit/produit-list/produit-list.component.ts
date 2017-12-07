import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ProduitApi} from '../../core/providers/produit-api.provider';
import {CommonService} from '../../util/common-service';
import {Produit} from '../../core/models/produit';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PromiseObservable} from "rxjs/observable/PromiseObservable";
import {Marque} from "../../core/models/marque";


@Component({
   encapsulation: ViewEncapsulation.None,
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss'],
  providers: [ProduitApi, CommonService]
})
export class ProduitListComponent implements OnInit {
   listProduits: Array<Produit>;
  cat: number;
  @Input()
  filtre: { marques: Array<Marque>, prix: number } = { marques: [], prix: 0};

  constructor(public _commonService: CommonService, private _produitApi: ProduitApi
  , public route: ActivatedRoute, public router: Router
  ) { }

  ngOnInit() {
    this.getAllProduits();
    this.getSelectedCategory();
  }

  getAllProduits() {
    this._produitApi.getProduits().subscribe(
      (produits) => {
        this.listProduits = produits;
      }
    );
  }

  getSelectedCategory() {
    const promise = new Promise(
      () => {
        this.route.params.forEach((params: Params) => {
         this.cat = params['id'];
        });
      });
    return PromiseObservable.create(promise).share();
  }


  getDetails(produitId: number) {
    this.router.navigate(['produit/details', {id: produitId}]);
  }

}
