import { Component } from '@angular/core';
import { Champion } from '../app/models/champion.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eternal';

  championList: Array<Champion>=new Array(); //ARRAY QUE ALMACENA OBJETOS TIPO CHAMPION

  checkShowForm = false;

  filterOption = "All";
  rolOption = "";
  tierOption = "";

  //FUNCIONES
  showForm(){
     this.checkShowForm = !this.checkShowForm;
  }

  addChampion(name: String, rol: String, tier: String, winRate: String, pickRate: String, banRate: String){
    let newChampion = new Champion(name, rol, tier, winRate, pickRate, banRate);
    this.championList.push(newChampion);
  }

  setRolColor(rol: String){
    if(rol === "Top"){
      return 'brown';
    }
    else if(rol === "Jungler"){
      return 'darkgreen';
    }
    else if(rol === "Mid"){
      return 'darkblue';
    }
    else if(rol === "Adc"){
      return 'purple';
    }
    else if(rol === "Support"){
      return 'pink';
    }
    else{
      return 'Black';
    }
  }

  setTierColor(tier: String){
    switch(tier){
      case 'S':
        return 'green';
      case 'A':
        return 'blue';
      case 'B':
        return 'yellow';
      case 'C':
        return 'orange';
      case 'D':
        return 'red';
      default:
        return 'black';
    }
  }

clickFilter(option: string){
 this.filterOption = option;
}

debug = console.log(this.filterOption);

}

