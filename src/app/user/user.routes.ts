
import {Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {InscriptionComponent} from './inscription/inscription.component';

export const UserRoutes: Routes  = [
  { path: 'user/auth', component: AuthComponent },
  { path: 'user/inscription', component: InscriptionComponent }
];

