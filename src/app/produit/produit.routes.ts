
import {Routes} from '@angular/router';
import {PromotionListComponent} from '../home/promotion-list/promotion-list.component';
import {ProduitListComponent} from "./produit-list/produit-list.component";

export const ProduitsRoutes: Routes  = [
  { path: 'produit', component: ProduitListComponent }
];

