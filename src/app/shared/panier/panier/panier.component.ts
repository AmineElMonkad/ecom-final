import { Component, OnInit } from '@angular/core';
import {ProduitApi} from "../../../core/providers/produit-api.provider";
import {Produit} from "../../../core/models/produit";
import {CommonService} from "../../../util/common-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material";
import {Client} from "../../../core/models/client";
import {SessionStorageService} from "angular-web-storage";
import {Location} from "@angular/common";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
  providers: [ProduitApi, CommonService]
})
export class PanierComponent implements OnInit {

  step: number;
  nbPanier: number;
  isLinear: boolean;
  produitsCommandes: Array<Produit>;

  panierForm: FormGroup;
  adressForm: FormGroup;
   commandeForm: FormGroup;


  connectedClient: Client;
  constructor(public _produitApi: ProduitApi, public _communService: CommonService, public session: SessionStorageService, private _location: Location) {

  }

  ngOnInit() {
    this.step = 1;
    this.isLinear = true;

    this.connectedClient = this.session.get('user');
    this.produitsCommandes = [];
    this.panierForm = new FormGroup({
      validPanier: new FormControl(false, {
        // validators: Validators.required
        // , updateOn: 'submit'
      })
    }); // , validate

    // this.nbPanier = Math.floor(Math.random() * 6) + 1
    this._produitApi.getProduit(6).subscribe(
      (produitCommande) => this.produitsCommandes.push(produitCommande)
    );

    if (this._communService.isEmptyObject(this.connectedClient)) {
      this.adressForm = new FormGroup({
        adresseLivraison: new FormControl('', {validators: Validators.required})
      });
    } else {
      this.adressForm = new FormGroup({
        adresseLivraison: new FormControl(this.connectedClient.adresse, {validators: Validators.required})
      });
    }

    /*this.commandeForm = new FormGroup({
      modePaiement: new FormControl('1', {validators: Validators.required})
    });*/


  }

  cancel() {
    this._location.back();
  }

  validateCard(stepper: MatStepper) {
      this.step++;
    /*if (this._communService.isEmptyObject(this.connectedClient)) {
      alert('connectez');
    }else {*/
      this.panierForm.setValue({validPanier: true});
      stepper.next();
    // }
  }

  validateAdress(stepper: MatStepper) {
      this.step ++;
      // alert(this._communService.stringfyJson(this.adressForm.value));
      stepper.next();
  }
  validateCmd() {
    alert('commande réalisée');
  }

  returnStep(stepper: MatStepper) {
    this.step--;
    stepper.previous();
  }
}

function validateStep(): boolean {

  return this.panierForm.value.validPanier;
}
