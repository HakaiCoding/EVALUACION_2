import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha',
  template: `<h3>{{fechaHoy}}</h3>
  <app-lugar></app-lugar>`,
  styles: ['h3 {color: blueviolet;}']
  
})
export class FechaComponent {
  fechaHoy : any = new Date();
}
