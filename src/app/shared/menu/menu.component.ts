import { Component, OnInit } from '@angular/core';
import {CategoryApi} from '../../core/providers/category-api.provider';
import {CommonService} from '../../util/common-service';
import {Category} from '../../core/models/category';
 import {Router} from "@angular/router";

@Component({
  selector: 'app-mon-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
  , providers: [ CategoryApi, CommonService]
})
export class MenuComponent implements OnInit {
  listCateogry: Array<Category>;

  constructor(private _commonService: CommonService, private _categoryService: CategoryApi
               , public router: Router
  ) { }

  ngOnInit() {
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
}
