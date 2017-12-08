import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {RouterModule} from '@angular/router';

// Routes
import {UserRoutes as routes} from './user.routes';
import {CommonService} from "../util/common-service";
import {ClientApi} from "../core/providers/client-api.provider";
import {MatFormFieldModule, MatIconModule} from "@angular/material";

@NgModule({
  imports: [
    MatFormFieldModule, MatIconModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [AuthComponent, InscriptionComponent],
  providers: [
    { provide: CommonService, useValue: CommonService }
    , { provide: ClientApi, useValue: ClientApi}
    ]
})
export class UserModule { }
