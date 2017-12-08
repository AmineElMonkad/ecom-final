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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Routes
import { ProduitsRoutes as routes } from './produit.routes';
import { FiltreBarComponent } from './filtre-bar/filtre-bar.component';
import { ProduitComponent } from './produit.component';
import {MarqueApi} from '../core/providers/marque-api.provider';
import {MarqueFilterPipe} from '../core/pipes/marque-filter.pipe';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatSliderModule} from '@angular/material';
import {PrixFilterPipe} from '../core/pipes/prix-filter.pipe';
import { PrdouitDetailsComponent } from './prdouit-details/prdouit-details.component';
import { PhotosListComponent } from './prdouit-details/photos-list/photos-list.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    MatSliderModule, MatCheckboxModule, MatCardModule, MatButtonModule, MatInputModule,
    FormsModule, ReactiveFormsModule,
    CommonModule,
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
    PhotosListComponent]
  , providers: [
     { provide: CommonService, useValue: CommonService }
   , { provide: ProduitApi, useValue: ProduitApi}
    , { provide: MarqueApi, useValue: MarqueApi}
  ]
  // to update at laste to export only super component
  , exports : [ProduitComponent]
})
export class ProduitModule { }
