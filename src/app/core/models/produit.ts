import {Photo} from "./photo";
import {Category} from "./category";
import {Marque} from "./marque";

export class Produit {
  id?: number;
  reference: string;
  prixUnitaire: number;
  quantite: number;
  listPhotos: Array<Photo>;
  category: Category;
  marque: Marque;

  isPromotion: false;
  prixePromotion?: number;
}
