// import * as panier from '../action/panier';
// import {Commande} from "../../../core/models/commande";
//
// export interface Etat {
//   /*loaded: boolean;
//   loading: boolean;
//   nbTotal: number;
//   prixTotal: number;*/
//   commande: Commande;
// }
//
// const initialState: Etat = {
//  /* loaded: false,
//   loading: false,
//   nbTotal: 0,
//   prixTotal: 0,*/
// commande: {dateCommande: new Date(), listProduitsCommandes: []}
// };
//
//
// export function reducer(
//   state = initialState,
//   action: panier.Actions
// ): Etat {
//   switch (action.type) {
//     case panier.CHARGER_PANIER: {
//       return Object.assign({}, state, {
//         loading: true,
//       });
//     }
//
//
//     case panier.CHARGER_PANIER_SUCCES: {
//       const commande = action.payload;
//
//       return {
//        /* loaded: true,
//         loading: false,
//         nbTotal: initialState.nbTotal,
//         prixTotal: initialState.prixTotal,*/
//         commande: commande
//       };
//     }
//
//   }
// }
//
// /*
// export const getLoaded = (etat: Etat) => etat.loaded;
//
// export const getLoading = (etat: Etat) => etat.loading;
// */
//
// export const getCommande = (etat: Etat) => etat.commande
