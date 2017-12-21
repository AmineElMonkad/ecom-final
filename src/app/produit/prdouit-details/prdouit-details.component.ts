import {Component, Input, OnInit, Output} from '@angular/core';
import {Produit} from '../../core/models/produit';
import {Photo} from '../../core/models/photo';
import {CommonService} from '../../util/common-service';
import {ProduitApi} from '../../core/providers/produit-api.provider';
import {ActivatedRoute, Params} from "@angular/router";
import {PromiseObservable} from "rxjs/observable/PromiseObservable";
import {Location} from "@angular/common";
import {LocalStorageService} from "angular-web-storage";
import {Panier} from "../../core/models/panier";

@Component({
  selector: 'app-prdouit-details',
  templateUrl: './prdouit-details.component.html',
  styleUrls: ['./prdouit-details.component.scss'],
  providers: [CommonService, ProduitApi]
})
export class PrdouitDetailsComponent implements OnInit {
  @Input() produit: Produit;
  localPanier: Panier;
  idProduit: number;
  selectedProduit: Produit;
  @Output() listPhotos: Array<Photo>;
  @Output() selectedPhoto: Photo;

  isPromotion: any;
  tauxPromo: number;
  pourcentagePromo: number;
  prix: number;
  constructor(public _commonService: CommonService, private _produitApi: ProduitApi, public route: ActivatedRoute, private _location: Location, public localStorage: LocalStorageService) { }

  ngOnInit() {
    this.getParam();
    this.getSelectedProduit();

  }

  getParam() {
    const promise = new Promise(
      () => {
        this.route.params.forEach((params: Params) => {
          this.idProduit = params['id'];
          this.isPromotion = params['isPromotion'];
          this.tauxPromo = params['taux'];
          this.pourcentagePromo = params['pourc'];
        });
      });
    return PromiseObservable.create(promise).share();
  }
  getSelectedProduit() {
    this._produitApi.getProduit(this.idProduit).subscribe(
      (produit) => {
             this.selectedProduit = produit;
             this.listPhotos = produit.listPhotos;

        this.selectedPhoto = this.listPhotos[0];


        if (this.isPromotion === 'true') {
          if (this.tauxPromo === 0) {
            this.prix = this.selectedProduit.prixUnitaire - this.pourcentagePromo;
          } else {
            this.prix = this.selectedProduit.prixUnitaire - (this.selectedProduit.prixUnitaire * this.tauxPromo / 100);
          }
        } else {
          this.prix = this.selectedProduit.prixUnitaire;
        }

      }
    );
  }

  return() { this._location.back(); }

  addCart() {
    this.localPanier = this.localStorage.get('panier');
    if (this._commonService.isEmptyObject(this.localPanier)) {
      this.localPanier = new Panier();
      this.localPanier.produitsCommandes = [];
      this.localPanier.nbElement = 1;
      // a vérifier si promo ou non
      this.localPanier.totalAPayer = this.produit.prixUnitaire;
    } else {
      this.localPanier.nbElement ++;
      // a vérifier si promo ou non
      this.localPanier.totalAPayer += this.produit.prixUnitaire;
    }

    this.localPanier.produitsCommandes.push(this.produit);

    this.localStorage.set('panier', this.localPanier);
    location.reload(true);
  }

}
