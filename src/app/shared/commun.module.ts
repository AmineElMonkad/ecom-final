

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {CategoryApi} from '../core/providers/category-api.provider';

import {MenuComponent} from './menu/menu.component';
import {NgModule} from '@angular/core';
import {commun} from './commun.routes';
import {CommonService} from '../util/common-service';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatPaginatorModule, MatSliderModule
} from "@angular/material";
// import {StoreModule} from "@ngrx/store";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AlertComponent } from './alert/alert.component';
import {AngularWebStorageModule} from "angular-web-storage";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    MenuComponent,
    AlertComponent
  ],
  imports: [
    MatSliderModule, MatCheckboxModule, MatCardModule, MatButtonModule, MatInputModule, MatPaginatorModule, MatIconModule,
    MatFormFieldModule,
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
    { provide: CommonService, useValue: CommonService }
  ]
  , exports : [MenuComponent, AlertComponent,
    MatSliderModule, MatCheckboxModule, MatCardModule, MatButtonModule, MatInputModule, MatPaginatorModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatIconModule]
})

export class CommunModule { }
