import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ProduitApi} from '../../core/providers/produit-api.provider';
import {CommonService} from '../../util/common-service';
import {Produit} from '../../core/models/produit';
import {Category} from "../../core/models/category";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {PromiseObservable} from "rxjs/observable/PromiseObservable";


@Component({
   encapsulation: ViewEncapsulation.None,
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss'],
  providers: [ProduitApi, CommonService]
})
export class ProduitListComponent implements OnInit {
   listProduits: Array<Produit>;
   @Input() selectedCateogy: Category;
  cat: number;
  constructor(private _commonService: CommonService, private _produitApi: ProduitApi
  , public route: ActivatedRoute
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
}
