import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {MyErrorHandler} from './util/my-error-handler';
import {CommonService} from './util/common-service';
import {CommonModule} from '@angular/common';
import {CommunModule} from './shared/commun.module';
import {ProduitModule} from './produit/produit.module';
import {HomeModule} from './home/home.module';
import {RouterModule} from '@angular/router';


// Routes
import {routes} from './app.routes';
import {UserModule} from "./user/user.module";

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
    // commun
    CommonModule,
    CommunModule,

    // modules
    HomeModule,
    ProduitModule,
    UserModule,

    // rooting
      RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: MyErrorHandler},
    { provide: CommonService, useValue: CommonService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
