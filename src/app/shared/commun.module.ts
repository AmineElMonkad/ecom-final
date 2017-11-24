

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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    MenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
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
  , exports : [MenuComponent]
})

export class CommunModule { }
