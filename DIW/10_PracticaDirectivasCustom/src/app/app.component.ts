import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Custom';

  jugadores: any[] = [
    { nombre: 'Earvin Jhonson', equipo: 'L.A. Lakers'},
    { nombre: 'Larry Bird', equipo: 'Boston Celtics'},
    { nombre: 'Michael Jordan', equipo: 'Chicago Bulls'}
  ]
}
