import { Pipe, PipeTransform } from '@angular/core';
import {CommonService} from '../../util/common-service';
import {Category} from '../models/category';

@Pipe({
  name: 'categorySearch'
})
export class CategorySearchPipe implements PipeTransform {

  constructor(private commonService: CommonService) {

  }

  transform(produitList: any, args?: any ): any {
    let result = [];
    if (!args) {
      return produitList;
    }
    result = produitList.filter(
      item => item.category.id === +args);
    return result;
  }


}
