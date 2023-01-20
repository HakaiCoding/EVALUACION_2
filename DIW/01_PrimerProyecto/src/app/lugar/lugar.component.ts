import { Component } from '@angular/core';

@Component({
  selector: 'app-lugar',
  template: `<h3>{{lugar}}</h3>`,
  styleUrls: ['./lugar.component.css']
  
})
export class LugarComponent {
  lugar : String = "Madrid";
}
