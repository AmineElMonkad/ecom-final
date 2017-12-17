import {Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ClientApi} from "../../core/providers/client-api.provider";
import {CommonService} from "../../util/common-service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {Client} from "../../core/models/client";
import {SessionStorageService} from "angular-web-storage";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [ClientApi]
})
export class AuthComponent implements OnInit {
  public userForm: FormGroup;
  private connectedClient: Client;
  hide = true;

  @Output()  public type ;
  @Output() public messageErreur: String;

  constructor(public _commonService: CommonService, private _clientApi: ClientApi, public router: Router, private _location: Location, public session: SessionStorageService) { }

  ngOnInit() {

    this.messageErreur = '';
    this.userForm = new FormGroup({
      login: new FormControl('', {
        validators: Validators.required
        // , updateOn: 'submit'
      }) ,
      mdp: new FormControl('', {
        validators: Validators.required
        // , updateOn: 'submit'
      })
    });
  }


  auth() {
    const client = new Client();
    client.login =  this.userForm.get('login').value;
    client.mdp =  this.userForm.get('mdp').value;
    this._clientApi.authentification(client).then(
      (clientReturned) => {
            if (clientReturned === 'null1') {
                 this.type = 'erreur';
                 this.messageErreur = 'mot de passe erroné';
                 console.log('change message ' + this.messageErreur);
              } else if (clientReturned === 'null2') {
                this.type = 'erreur';
                this.messageErreur = 'login erroné';
                console.log('change message ' + this.messageErreur);
              } else {
            console.log('not error');
            this.messageErreur = '';
            this.connectedClient = clientReturned;

            this.session.set('user', this.connectedClient);
              this._location.back();
           // alert('client connecte ' + this._commonService.stringfyJson(this.connectedClient));
          }
         // alert('type ' + this.type + ' message ' + this.messageErreur);
      })
      .catch((error) => console.log('*/Exception ' + this._commonService.stringfyJson(error)));

  }

  resetAlert() {
    this.messageErreur = 'reset';
  }
  createAccount() {
    this.router.navigate(['user/inscription']);
  }

}
