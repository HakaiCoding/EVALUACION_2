import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notas';

  score = 5;
  nota = "";

  checkScore(){
    if(this.score >= 5){
      return true;
    }
    else{
      return false;
    }
  }

  moreScore(){
    if(this.score >= 10){
      return this.score = 10;
    }
    else{
      return this.score++;
    }
  }

 lessScore(){
    if(this.score <= 0){
      return this.score = 0;
    }
    else{
      return this.score--;
    }
  }

  writeScore(score : Number){
    if(this.score === 0 || this.score === 1 || this.score === 2 || this.score === 3 || this.score === 4){
      return this.nota = "Suspenso";
    }
    else if(this.score === 5){
      return this.nota = "Suficiente";
    }
    else if(this.score === 6){
      return this.nota = "Bien";
    }
    else if(this.score === 7 || this.score === 8){
      return this.nota = "Notable";
    }
    else{
      return this.nota = "Sobresaliente";
    }
  }
}
