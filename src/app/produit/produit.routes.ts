
import {Routes} from '@angular/router';
import {ProduitComponent} from './produit.component';
import {PrdouitDetailsComponent} from './prdouit-details/prdouit-details.component';

export const ProduitsRoutes: Routes  = [
  { path: 'produit', component: ProduitComponent },
  { path: 'produit/details', component: PrdouitDetailsComponent }
];

