import { Component, OnInit } from '@angular/core';
import {Marque} from "../core/models/marque";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  monFiltre: { marques: Array<Marque>, prix: number } = {marques: [], prix: 0};
  constructor() { }

  ngOnInit() {
  }

  buttonMessage(filtre) {
    this.monFiltre = filtre;
  }

}
