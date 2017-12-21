import {Component, OnInit, Output} from '@angular/core';
import {ProduitApi} from "../../../core/providers/produit-api.provider";
import {Produit} from "../../../core/models/produit";
import {CommonService} from "../../../util/common-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material";
import {Client} from "../../../core/models/client";
import {LocalStorageService, SessionStorageService} from "angular-web-storage";
import {Location} from "@angular/common";
import {Panier} from "../../../core/models/panier";
import {CommandeApi} from "../../../core/providers/commande-api.provider";
import {Commande} from "../../../core/models/commande";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
  providers: [ProduitApi, CommonService, CommandeApi]
})
export class PanierComponent implements OnInit {
  @Output()  public type ;
  @Output() public messageErreur: String;
  step: number;
  isLinear: boolean;
  panier: Panier;

  isValidateUser: boolean;
  panierForm: FormGroup;
  adressForm: FormGroup;
  commandeForm: FormGroup;

  moisValidites: Array<number>;
  anneesValidites: Array<number>;

  connectedClient: Client;

  commande: Commande;

  constructor(public _produitApi: ProduitApi, private commandeApi: CommandeApi, public _communService: CommonService, public session: SessionStorageService,
              private _location: Location, private localStorage: LocalStorageService) {

  }

  ngOnInit() {
    this.isValidateUser = false;
    this.step = 1;
    this.isLinear = true;
    this.connectedClient = this.session.get('user');
    // alert('get panier ' + this._communService.stringfyJson(this.panier.produitsCommandes));

    this.panierForm = new FormGroup({
      validPanier: new FormControl(false, {
        // validators: Validators.required
        // , updateOn: 'submit'
      })
    }); // , validate


    if (this._communService.isEmptyObject(this.connectedClient)) {
      this.adressForm = new FormGroup({
        adresseLivraison: new FormControl('', {validators: Validators.required})
      });
    } else {
      this.adressForm = new FormGroup({
        adresseLivraison: new FormControl(this.connectedClient.adresse, {validators: Validators.required})
      });
    }
    // const cardRegex = '5[1-5]\ d{ 14})';
    const carteValidator = [];
    carteValidator.push(Validators.required);
    // carteValidator.push(Validators.pattern(cardRegex));

    this.moisValidites = [];
    for (let i = 1; i < 13; i++ ) {
      this.moisValidites.push(i);
    }

    this.anneesValidites = [];
    for (let i = 2018; i < 2051; i++ ) {
      this.anneesValidites.push(i);
    }


    if (this._communService.isEmptyObject(this.connectedClient)) {
      this.commandeForm = new FormGroup({
        modePaiement: new FormControl(''
          // , {validators: Validators.required}
        ),
        numCarte: new FormControl(''
          // , {validators: carteValidator}
        ),
        nomCarte: new FormControl(''
          // , {validators: Validators.required}
        ),
        moisExpir: new FormControl(''
          // , {validators: Validators.required}
        ),
        anneeExpir: new FormControl(''
          // , {validators: Validators.required}
        ),
        crypto: new FormControl(''
          // , {validators: Validators.required}
        )
      });
    } else {
      this.commandeForm = new FormGroup({
        modePaiement: new FormControl(''
          // , {validators: Validators.required}
        ),
        numCarte: new FormControl(''
          // , {validators: carteValidator}
        ),
        nomCarte: new FormControl(this.connectedClient.nom + ' ' + this.connectedClient.prenom
          // , {validators: Validators.required}
        ),
        moisExpir: new FormControl(''
          // , {validators: Validators.required}
        ),
        anneeExpir: new FormControl(''
          // , {validators: Validators.required}
        ),
        crypto: new FormControl(''
          // , {validators: Validators.required}
        )
      });
    }



    this.panier = this.localStorage.get('panier');
    if (this._communService.isEmptyObject(this.panier)) {
      this.panier = new Panier();
      this.panier.produitsCommandes = [];
    }

  }

  deleteProduit(produitAEnleve: Produit) {
    if (this.panier.produitsCommandes.length === 1) {
      this.panier.produitsCommandes = [];
      this.localStorage.remove('panier');
    } else {
      const index: number = this.panier.produitsCommandes.indexOf(produitAEnleve);
      if (index !== -1) {
        this.panier.produitsCommandes.splice(index, 1);
      }
      this.panier.nbElement --;
      // prix promotion
      this.panier.totalAPayer -= produitAEnleve.prixUnitaire;

      this.localStorage.set('panier', this.panier);
    }
  }

  viderPanier() {
    this.panier.produitsCommandes = [];
    this.localStorage.clear();
  }
  cancel() {
    this._location.back();
  }

  validateCard(stepper: MatStepper) {

    if (this._communService.isEmptyObject(this.connectedClient)) {
      this.isValidateUser = false;
      this.type = 'erreur';
      this.messageErreur = 'Vous devez vous connecter afin de commander';
    }else {
      this.isValidateUser = true;
      this.step++;
      this.panierForm.setValue({validPanier: true});
      stepper.next();
    }
  }

  validateAdress(stepper: MatStepper) {
    this.step ++;
    // alert('step to validate commade ' + this.step);

    stepper.next();
  }


  returnStep(stepper: MatStepper) {
    this.step--;
    stepper.previous();
  }

  validateCmd() {
    this.commande = new Commande();
    this.commande.client = this.connectedClient;
    this.commande.dateCommande = this._communService.toDate(new Date());
    this.commande.prixCommande = this.panier.totalAPayer;
    this.commande.listProduitsCommandes = this.panier.produitsCommandes;
    this.commande.modePayement = this.commandeForm.get('modePaiement').value;
    this.commandeApi.ajouterCommande(this.commande, this.connectedClient.mdp)
      .then(
        () => {
          this.localStorage.remove('panier');
          this.type = 'succes';
          this.messageErreur = 'commande réalisée avec succes';
        },
        (error) => {
          // alert('error ' + this._communService.stringfyJson(error))
          // exist
          if (error.status === 401) {
            this.type = 'erreur';
            this.messageErreur = 'Oops !  session expirée' ;
          }}
      );
  }
}
