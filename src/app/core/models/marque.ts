
import {Photo} from './photo';

export class Marque {
  id: number;
  libelle: string;
  dateCreation: Date;
  lastUpdate: Date;
  photo: Photo;
  isSelected = false;
}
