import { Component } from '@angular/core';
import { Candidato } from 'src/models/candidato.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen Víctor Sánchez';

  //Login
  userLogin: string = '';
  userPass: string = '';
  errorMessage: string = '';
  loginCheck: boolean = false;

  onClickEmpezar(){
    if(this.userLogin === 'Jose' && this.userPass === 'Abogado' ){
      this.loginCheck = true;
    }
    else {
      this.errorMessage = 'Error en la identificación';
    }
  }

  //Array Candidatos y objetos Candidato
  maria = new Candidato("María", 655221080, 25, "Soporte", 0, 6);
  marta = new Candidato("Marta", 655221081, 30, "Coordinadora", 1, 3);
  pedro = new Candidato("Pedro", 655221082, 35, "Limpieza", 2, 6);
  raul = new Candidato("Raúl", 655221083, 40, "Asesor", 3, 4);
  laura = new Candidato("Laura", 655221084, 45, "Contabilidad", 3, 10);
  victor = new Candidato("Víctor", 655221082, 35, "Limpieza", 5, 7);

  candidatos: Array<Candidato>=new Array(this.maria, this.marta, this.pedro, this.raul, this.laura, this.victor);

  //Array estudios
  nivelesEstudios: string[] = ['Sin estudios', 'ESO', 'Bachillerato', 'Ciclo Superior', 'Ciclo Medio', 'Grado y Master'];
  
  //Contador para iterar sobre el Array candidatos
  cont: number = 0;

  //Funciones para ir hacia atras/delante
  onClickBefore(){
    if(this.cont !== 0){
      this.cont--;
    }
    else{
      this.cont = 0
    }
  }

  onClickAfter(){
    if(this.cont !== this.candidatos.length){
      this.cont++;
    }
    else{
      this.cont = this.cont;
    }
  }

  
  //Filtros
  checkEspecialidad: boolean = false;
  checkEstudios: boolean = false;

  filterByEspecialidad(){
    this.checkEspecialidad = !this.checkEspecialidad;
  }

  filterByEstudios(){
    this.checkEstudios = !this.checkEstudios;
  }

}
