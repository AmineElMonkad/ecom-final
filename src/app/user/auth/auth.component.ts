import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ClientApi} from "../../core/providers/client-api.provider";
import {CommonService} from "../../util/common-service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [ClientApi]
})
export class AuthComponent implements OnInit {
  public userForm: FormGroup;
  login = new FormControl('', {
    validators: Validators.required
    // , updateOn: 'submit'
  });
  mdp = new FormControl('', {
    validators: Validators.required
    // , updateOn: 'submit'
  });
  hide = true;

  constructor(public _commonService: CommonService, private _clientApi: ClientApi, public router: Router) { }

  ngOnInit() {

    this.userForm = new FormGroup({
      login: this.login ,
      mdp: this.mdp
    });
  }

  getErrorMessage() {
    return this.login.hasError('required') ? 'champs obligatoire' : '';
  }

  auth() {
    console.log('authentifier');
  }

  createAccount() {
    this.router.navigate(['user/inscription']);
  }
}
