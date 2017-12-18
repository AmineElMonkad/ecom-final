import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../util/common-service';
import {ClientApi} from '../../core/providers/client-api.provider';
import {Router} from '@angular/router';
import {Client} from "../../core/models/client";
import {Location} from "@angular/common";


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
  providers: [ClientApi]
})
export class InscriptionComponent implements OnInit {
  public userForm: FormGroup;
  hide = true;

  @Output()  public type ;
  @Output() public messageErreur: String;
  constructor(public _commonService: CommonService, private _clientApi: ClientApi, public router: Router, private _location: Location) { }

  ngOnInit() {
    let mailValidator = [];
    mailValidator.push(Validators.required);
    mailValidator.push(Validators.email);
    this.userForm = new FormGroup({
      nom: new FormControl('', {
        validators: Validators.required
        // , updateOn: 'submit'
      }) ,

      prenom: new FormControl('', {
        validators: Validators.required
        // , updateOn: 'submit'
      }) ,

      adresse: new FormControl('') ,

      Telephone : new FormControl('') ,

      mail: new FormControl('', {
        validators: Validators.compose(mailValidator)
        // , updateOn: 'submit'
      }) ,

      login: new FormControl('', {
        validators: Validators.required
        // , updateOn: 'submit'
      }) ,

      mdp: new FormControl('', {
        validators: Validators.required
        // , updateOn: 'submit'
      }) ,

      /* mdpR: new FormControl('', {
        validators: Validators.required
        // , updateOn: 'submit'
      }, ) */
    });
  }

  resetAlert() {
    this.type = 'reset';
  }

createAccount() {
   const client = <Client> this.userForm.value;
  this._clientApi.add(client).then(
    (added) => {
        this.type = 'succes';
        this.messageErreur = 'Bienvenue ' + client.prenom;
       // alert(this._commonService.stringfyJson(added));
      this._location.back();
    },
    (error) => {
      // exist
      if (error.status === 409) {
        this.type = 'erreur';
        this.messageErreur = 'Oops !  ' + client.login + ' existe déjà ';
      }
    }
  );
}
}
