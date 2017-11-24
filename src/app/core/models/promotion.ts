import {ProduitPromotion} from './produit-promotion';

export class Promotion {
    id: number;
    titre: string;
    dateDebut: Date;
    dateFin: Date;
    listProduit?: Array<ProduitPromotion>;
}
