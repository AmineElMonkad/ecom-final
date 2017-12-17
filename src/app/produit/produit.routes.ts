
import {Routes} from '@angular/router';
import {ProduitComponent} from './produit.component';
import {PrdouitDetailsComponent} from './prdouit-details/prdouit-details.component';
import {ProduitSearchComponent} from "./produit-search/produit-search.component";

export const ProduitsRoutes: Routes  = [
  { path: 'produit', component: ProduitComponent },
  { path: 'produit/details', component: PrdouitDetailsComponent },
  { path: 'produit/searchProduct/:mc', component: ProduitSearchComponent }
  // , { path: 'produit/searchProduct', redirectTo: '/produit', pathMatch: 'full' }

];

