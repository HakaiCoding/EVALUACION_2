import { Component, OnInit } from '@angular/core';
import {Persona} from '../modelos/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newPersona = new Persona("Victor", "Sanchez", "Garcia", 29);

  randomDay(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  randomDiss(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  message: string = `Estimado ${this.newPersona.nombre},
  si realiza una compra en nuestro supermercado el día ${this.randomDay(1, 28)}
  tendrá un ${this.randomDiss(1, 5) * 2}% de descuento en el total de su compra.`;
}
