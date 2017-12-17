import { Action } from '@ngrx/store';
import {Produit} from '../../../core/models/produit';
import {Commande} from '../../../core/models/commande';

export const CHARGER_PANIER = '[Panier] CHARGER_PANIER';
export const CHARGER_PANIER_SUCCES = '[Panier] CHARGER_PANIER_SUCCES';
export const CHARGER_PANIER_ERREUR = '[Panier] CHARGER_PANIER_ERREUR';

export const AJOUTER_PANIER = '[Panier] AJOUTER_PANIER';
export const AJOUTER_PANIER_SUCCES = '[Panier] AJOUTER_PANIER_SUCCES';
export const AJOUTER_PANIER_ERREUR = '[Panier] AJOUTER_PANIER_ERREUR';

export const SUPPRIMER_PANIER = '[Panier] SUPPRIMER_PANIER';
export const SUPPRIMER_PANIER_SUCCES = '[Panier] SUPPRIMER_PANIER_SUCCES';
export const SUPPRIMER_PANIER_ERREUR = '[Panier] SUPPRIMER_PANIER_ERREUR';

/* chargement*/
export class ChargerPanier implements Action {
  readonly type = CHARGER_PANIER;
}

export class ChargementSuccesAction implements Action {
  readonly type = CHARGER_PANIER_SUCCES;

  constructor(public payload: Commande) {}
}

export class ChargementErreurActon implements Action {
  readonly type = CHARGER_PANIER_ERREUR;

  constructor(public payload: any) {}
}

/* ajout*/
export class AjouterPanier implements Action {
  readonly type = AJOUTER_PANIER;
}

export class AjoutSuccesAction implements Action {
  readonly type = AJOUTER_PANIER_SUCCES;

  constructor(public payload: Produit) {}
}

export class AjoutErreurActon implements Action {
  readonly type = AJOUTER_PANIER_ERREUR;

  constructor(public payload: any) {}
}


export class SupprimerPanier implements Action {
  readonly type = SUPPRIMER_PANIER;
}

export class SuprressionSuccesAction implements Action {
  readonly type = SUPPRIMER_PANIER_SUCCES;

  constructor(public payload: Produit) {}
}

export class SuprressionErreurActon implements Action {
  readonly type = SUPPRIMER_PANIER_ERREUR;

  constructor(public payload: any) {}
}
export type Actions =
  | ChargerPanier
  | ChargementSuccesAction
  | ChargementErreurActon
  | AjouterPanier
  | AjoutSuccesAction
  | AjoutErreurActon
  | SupprimerPanier
  | SuprressionSuccesAction
  | SuprressionErreurActon;
