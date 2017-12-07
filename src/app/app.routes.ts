
import {Routes} from '@angular/router';

export const routes: Routes  = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'produit',
    loadChildren: './produit/produit.module#ProduitModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }
  /*,
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }*/
];

