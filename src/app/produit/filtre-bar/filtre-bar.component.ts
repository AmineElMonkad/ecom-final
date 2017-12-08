import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarqueApi} from '../../core/providers/marque-api.provider';
import {Marque} from "../../core/models/marque";
import {CommonService} from "../../util/common-service";
import {ProduitApi} from "../../core/providers/produit-api.provider";

@Component({
  selector: 'app-filtre-bar',
  templateUrl: './filtre-bar.component.html',
  styleUrls: ['./filtre-bar.component.scss'],
  providers: [MarqueApi, ProduitApi]
})
export class FiltreBarComponent implements OnInit {
  @Output()
  emitEvent = new EventEmitter();

  @Input()
  filter: { marques: Array<Marque>, prix: number } = {marques: [], prix: 0};

  listMaruqe: Array<Marque>;
  minMaxPrix: Array<number>;
  selectedPrix: number;

  constructor(private _commonService: CommonService, private _maruqeApi: MarqueApi, private _produitApi: ProduitApi) { }

  ngOnInit() {
    this.getAllmarques();
    this.getMinMaxPrix();
    this.selectedPrix = null;
  }
  drag() {
    console.log('selectedPrix ' + this.selectedPrix);}

  filtrer() {
    this.filter.marques = this.listMaruqe.filter(marque => marque.isSelected);
    this.filter.prix = this.selectedPrix;
     this.emitEvent.next(this.filter);
  }

  getAllmarques() {
    this._maruqeApi.getMarques().subscribe(
      (marques) => this.listMaruqe = marques);
  }

  getMinMaxPrix() {
    this._produitApi.getMinMaxPrix().subscribe(
      (minMax) => this.minMaxPrix = minMax)
      .add(() => {    this.filter.prix = this.minMaxPrix[0];
      });
  }

}
