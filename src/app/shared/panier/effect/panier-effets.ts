import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {defer} from 'rxjs/observable/defer';

import {Database} from '@ngrx/db';
import {Action} from '@ngrx/store';

import * as panier from '../action/panier';
import {Commande} from '../../../core/models/commande';
import {of} from 'rxjs/observable/of';
import {Produit} from '../../../core/models/produit';
@Injectable()
export class PanierEffets {
  constructor(private actions$: Actions, private db: Database) {}

 /* @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('velo_app');
  });
*/


  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(panier.CHARGER_PANIER)
    .startWith(new panier.ChargerPanier())
    .map(() =>
      new panier.ChargerPanier())
    .catch(error => of(new panier.ChargementErreurActon(error)));
}
