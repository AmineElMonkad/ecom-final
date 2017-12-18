import {Photo} from "./photo";
import {Category} from "./category";
import {Marque} from "./marque";
import {FicheTechnique} from "./fiche-technique";

export class Produit {
  id?: number;
  reference: string;
  prixUnitaire: number;
  quantite: number;
  listPhotos: Array<Photo>;
  category: Category;
  marque: Marque;

  ficheTechnique: FicheTechnique;
  isPromotion: false;
  prixePromotion?: number;
}
