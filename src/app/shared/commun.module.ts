

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {CategoryApi} from '../core/providers/category-api.provider';

import {MenuComponent} from '../menu/menu.component';
import {NgModule} from '@angular/core';
import {commun} from './commun.routes';
import {CommonService} from '../util/common-service';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
  MatPaginatorModule, MatRadioModule, MatSelectModule, MatSliderModule, MatStepperModule
} from "@angular/material";
// import {StoreModule} from "@ngrx/store";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AlertComponent } from './alert/alert.component';
import {AngularWebStorageModule} from "angular-web-storage";
import { PanierComponent } from './panier/panier/panier.component';
import { RatingComponent } from './rating/rating.component';
import {CdkTableModule} from "@angular/cdk/table";
import {CommandeApi} from "../core/providers/commande-api.provider";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AlertComponent,
    PanierComponent,
    RatingComponent
  ],
  imports: [
    MatSliderModule, MatCheckboxModule, MatCardModule, MatButtonModule, MatInputModule, MatPaginatorModule, MatIconModule, MatListModule,
    MatFormFieldModule, MatStepperModule, MatRadioModule, MatSelectModule,
    AngularWebStorageModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   // StoreModule.forRoot(reducer),
    RouterModule.forRoot(commun),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: CategoryApi, useValue: CategoryApi },
    { provide: CommonService, useValue: CommonService },
    { provide: CommandeApi, useValue: CommandeApi }
  ]
  , exports : [AlertComponent,  MatSliderModule, MatCheckboxModule, MatCardModule, MatButtonModule, MatInputModule,
    MatPaginatorModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatIconModule, MatListModule, RatingComponent, MatRadioModule, MatSelectModule]})

export class CommunModule { }
