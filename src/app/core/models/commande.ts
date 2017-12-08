import {Client} from './client';
import {Produit} from './produit';

export class Commande {
  // id?: number;
  client?: Client;
  dateCommande: Date;
  listProduitsCommandes: Array<Produit>;
}

