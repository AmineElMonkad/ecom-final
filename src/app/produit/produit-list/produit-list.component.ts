import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ProduitApi} from '../../core/providers/produit-api.provider';
import {CommonService} from '../../util/common-service';
import {Produit} from '../../core/models/produit';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PromiseObservable} from "rxjs/observable/PromiseObservable";
import {Marque} from "../../core/models/marque";
import {PageEvent} from "@angular/material";


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

  /* pagination */

  pageSizeOptions = [6, 9, 12, 15];

  // MatPaginator Output
  pageEvent: PageEvent;
  constructor(public _commonService: CommonService, private _produitApi: ProduitApi
  , public route: ActivatedRoute, public router: Router
  ) { }

  ngOnInit() {
    this.getAllProduits();
    this.getSelectedCategory();

    this.pageEvent = new PageEvent;
    this.pageEvent.pageIndex = 0;
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
    this.router.navigate(['produit/details', {id: produitId, isPromotion: false}]);
  }




  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  paginationFrom(pageEvent) {
    return ((pageEvent.pageIndex === 0) ? pageEvent.pageIndex : (pageEvent.pageIndex) * pageEvent.pageSize );
  }

  paginationTo(pageEvent) {
    return this.paginationFrom(pageEvent) + 6;
  }

  buttonMessage(filtre) {
    this.filtre = filtre;
  }


}
