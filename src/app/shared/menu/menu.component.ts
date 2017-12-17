import { Component, OnInit } from '@angular/core';
import {CategoryApi} from '../../core/providers/category-api.provider';
import {CommonService} from '../../util/common-service';
import {Category} from '../../core/models/category';
 import {Router} from '@angular/router';


import * as panier from '../panier/reduce/panier';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionStorageService} from "angular-web-storage";
import {Client} from "../../core/models/client";


@Component({
  selector: 'app-mon-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
  , providers: [ CategoryApi, CommonService]
})
export class MenuComponent implements OnInit {
  /*comande$: Observable<Commande>;
  n*/bItems: number;

  listCateogry: Array<Category>;
  public searchForm: FormGroup;

  connectedClient: Client;
  constructor(private _commonService: CommonService, private _categoryService: CategoryApi
               , public router: Router, public session: SessionStorageService
            //   , store: Store<panier.Etat>
  ) {
   // this.comande$ = store.select(panier.getCommande);
 // this.comande$.map((commande) => this.nbItems = commande.listProduitsCommandes.length);
}

  ngOnInit() {
    this.connectedClient = this.session.get('user');
     this.searchForm = new FormGroup({mc: new FormControl('', {
       validators: Validators.required
       // , updateOn: 'submit'
     })});
    this.getAllCategories();
     this.listCateogry[0].active = 'active';
  }

  getAllCategories() {
    this._categoryService.getCategories().subscribe(cat => this.listCateogry = cat);
  }

  /*
    *underline selected item
   */
  selectItem(item: number) {
    this.listCateogry.forEach(function(cat, i) {  cat.active = ''; });
    this.listCateogry[item].active = 'active';
     this.router.navigate(['produit', {id: this.listCateogry[item].id}]);
  }

  selectUser(component) {
    this.router.navigate(['user/' + component]);
  }


  doSearch() {
    this.router.navigate(['produit/searchProduct/' + this.searchForm.get('mc').value]); // , this.searchForm.get('mc').value]
    location.reload();
  }

  isConnected(): boolean {
    // alert(this.connectedClient);
    return ! this._commonService.isEmptyObject(this.connectedClient);
  }

  disconnect() {
    this.session.remove('user');
  }
}
