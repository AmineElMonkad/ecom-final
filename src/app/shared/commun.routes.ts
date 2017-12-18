
import {Routes} from '@angular/router';
import {PanierComponent} from './panier/panier/panier.component';

export const commun: Routes  = [
  { path: 'panier', component: PanierComponent }
  // { path: 'menu', component: MenuComponent }
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

