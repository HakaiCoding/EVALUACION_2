import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGIF Ejercicio';

  check : Boolean = false;

  userReg(){
    this.check=true;
  }
}
