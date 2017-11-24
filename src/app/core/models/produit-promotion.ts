import {Produit} from './produit';

export class ProduitPromotion {
    id: number;
    produit: Produit;
    tauxReduction?: number;
    reduction?: number;
    prixPromotion: number;
}
