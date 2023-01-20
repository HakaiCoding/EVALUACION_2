import { Component } from '@angular/core';
import { Cake } from '../models/tarta.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tartas';

  checkIntolerance: String = "";
  checkCalories: String = "";

  cakes: Array<Cake>=new Array();

  createCake(name: String, flavor: String, intolerance: String, calRation: String, price: String, numPortion: String){
    let newCake = new Cake(name, flavor, intolerance, calRation, price, numPortion);
    this.cakes.push(newCake);
  }
}
