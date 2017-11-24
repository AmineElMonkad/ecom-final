
import {Routes} from '@angular/router';

export const routes: Routes  = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'produit',
    loadChildren: './produit/produit.module#ProduitModule'
  }
  /*,
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

