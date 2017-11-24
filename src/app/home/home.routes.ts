
import {Routes} from '@angular/router';
import {PromotionListComponent} from '../home/promotion-list/promotion-list.component';
import {HomeComponent} from "./home.component";

export const HomeRoutes: Routes  = [
  { path: '', component: HomeComponent  },

  /*{
    path: 'product',
    loadChildren: './product/index#ProductModule'
  },
  {
    path: 'user',
    loadChildren: './user/index#UserModule'
    // , canActivate: [ componetnttoactivate ]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }*/
];

