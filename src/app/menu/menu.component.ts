import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CategoryApi} from '../core/providers/category-api.provider';
import {CommonService} from '../util/common-service';
import {Category} from '../core/models/category';
 import {Router} from '@angular/router';


import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService, SessionStorageService} from "angular-web-storage";
import {Client} from "../core/models/client";
import {Panier} from "../core/models/panier";


@Component({
  selector: 'app-mon-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
  , providers: [ CategoryApi, CommonService]
})
export class MenuComponent implements OnInit, OnChanges {

  @Input() panier: Panier;

  listCateogry: Array<Category>;
  public searchForm: FormGroup;

  connectedClient: Client;
  constructor(private _commonService: CommonService, private _categoryService: CategoryApi
               , public router: Router, public session: SessionStorageService, public localStorage: LocalStorageService,
            //   , store: Store<add-panier.Etat>
  ) {
   // this.comande$ = store.select(add-panier.getCommande);
 // this.comande$.map((commande) => this.nbItems = commande.listProduitsCommandes.length);
}

  ngOnInit() {
    this.connectedClient = this.session.get('user');
    this.panier = this.localStorage.get('panier');
     this.searchForm = new FormGroup({mc: new FormControl('', {
       validators: Validators.required
       // , updateOn: 'submit'
     })});
    this.getAllCategories();
     this.listCateogry[0].active = 'active';
  }

  ngOnChanges() {
    alert('chagement');
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

  openCart() {
    this.router.navigate(['panier']);
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
    location.reload();
  }
}
