import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommunModule} from '../shared/commun.module';
import {CommonService} from '../util/common-service';
import { PromotionListComponent } from '../home/promotion-list/promotion-list.component';
import {ProduitPromotionApi} from '../core/providers/produit-promotion-api';
import {PromotionApi} from '../core/providers/promotion-api';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ProduitListComponent } from './produit-list/produit-list.component';
import {ProduitApi} from '../core/providers/produit-api.provider';
import { CategorySearchPipe } from '../core/pipes/category-search.pipe';


// Routes
import { ProduitsRoutes as routes } from './produit.routes';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
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
    CategorySearchPipe]
  , providers: [
     { provide: CommonService, useValue: CommonService }
   , { provide: ProduitApi, useValue: ProduitApi}
  ]
  // to update at laste to export only super component
  , exports : [ProduitListComponent]
})
export class ProduitModule { }
