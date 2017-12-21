import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonService} from '../util/common-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ProduitListComponent } from './produit-list/produit-list.component';
import {ProduitApi} from '../core/providers/produit-api.provider';
import { CategorySearchPipe } from '../core/pipes/category-search.pipe';

// Routes
import { ProduitsRoutes as routes } from './produit.routes';
import { FiltreBarComponent } from './produit-list/filtre-bar/filtre-bar.component';
import { ProduitComponent } from './produit.component';
import {MarqueApi} from '../core/providers/marque-api.provider';
import {MarqueFilterPipe} from '../core/pipes/marque-filter.pipe';
import {PrixFilterPipe} from '../core/pipes/prix-filter.pipe';
import { PrdouitDetailsComponent } from './prdouit-details/prdouit-details.component';
import { PhotosListComponent } from './prdouit-details/photos-list/photos-list.component';
import { ProduitSearchComponent } from './produit-search/produit-search.component';
import {CommunModule} from "../shared/commun.module";
import { AddPanierComponent } from './add-panier/add.panier.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule, CommunModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    // components
     ProduitListComponent,
    // pipes
    CategorySearchPipe, MarqueFilterPipe, PrixFilterPipe,
    FiltreBarComponent,
    ProduitComponent,
    PrdouitDetailsComponent,
    PhotosListComponent,
    ProduitSearchComponent,
    AddPanierComponent]
  , providers: [
     { provide: CommonService, useValue: CommonService }
   , { provide: ProduitApi, useValue: ProduitApi}
    , { provide: MarqueApi, useValue: MarqueApi},
  ]
  // to update at laste to export only super component
  , exports : [ProduitComponent]
})
export class ProduitModule { }
