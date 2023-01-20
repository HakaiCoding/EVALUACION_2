import { Component } from '@angular/core';
import { Alumno} from './models/alumno.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Repaso';

  showForm: boolean = true;

  name: string = '';
  diw: number = 0;
  dwec: number = 0;
  php: number = 0;
  media: number = 0;

  filtro: string = '';

  alumnos: Array<Alumno>=new Array();

  addStudent(nombre: string, diw: number, dwec: number, php: number, media:number){
    this.alumnos.push(new Alumno(nombre, diw, dwec, php, media));
  }

  setColorMedia(media: number){
    if(media <= 4){
      return 'red';
    }else if(media === 5){
      return 'blue';
    }else if (media >= 6){
      return 'green';
    }
    else{
      return 'black';
    }
  }

  setDiwColor(diw: number){
    if(diw <= 4){
      return 'red';
    }else if(diw === 5){
      return 'blue';
    }else if (diw >= 6){
      return 'green';
    }
    else{
      return 'black';
    }
  }

  toggleForm(){
    this.showForm = !this.showForm;
  }

  onClickSubrayar(){
    return 'subrayado';
  }
}
