import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PromotionListComponent} from "./promotion-list/promotion-list.component";
import {PromotionApi} from "../core/providers/promotion-api";
import {ProduitPromotionApi} from "../core/providers/produit-promotion-api";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {RouterModule} from "@angular/router";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";


// Routes
import { HomeRoutes as routes } from './home.routes';
import { HomeComponent } from './home.component';

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
  declarations: [PromotionListComponent, HomeComponent]
  , providers : [
    { provide: PromotionApi, useValue: PromotionApi }
  , { provide: ProduitPromotionApi, useValue: ProduitPromotionApi }]
  ,  exports : [HomeComponent]
})
export class HomeModule { }
