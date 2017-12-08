import {Component, OnInit, Output} from '@angular/core';
import {Produit} from '../../core/models/produit';
import {Photo} from '../../core/models/photo';
import {CommonService} from '../../util/common-service';
import {ProduitApi} from '../../core/providers/produit-api.provider';
import {ActivatedRoute, Params} from "@angular/router";
import {PromiseObservable} from "rxjs/observable/PromiseObservable";

@Component({
  selector: 'app-prdouit-details',
  templateUrl: './prdouit-details.component.html',
  styleUrls: ['./prdouit-details.component.css'],
  providers: [CommonService, ProduitApi]
})
export class PrdouitDetailsComponent implements OnInit {
  idProduit: number;
  selectedProduit: Produit;
  @Output() listPhotos: Array<Photo>;
  @Output() selectedPhoto: Photo;

  constructor(public _commonService: CommonService, private _produitApi: ProduitApi, public route: ActivatedRoute) { }

  ngOnInit() {
    this.getParam();
    this.getSelectedProduit();
    this.selectedPhoto = this.listPhotos[0];
  }

  getParam() {
    const promise = new Promise(
      () => {
        this.route.params.forEach((params: Params) => {
          this.idProduit = params['id'];
        });
      });
    return PromiseObservable.create(promise).share();
  }
  getSelectedProduit() {
    this._produitApi.getProduit(this.idProduit).subscribe(
      (produit) => {
             this.selectedProduit = produit;
             this.listPhotos = produit.listPhotos;
      }
    );
  }
}
