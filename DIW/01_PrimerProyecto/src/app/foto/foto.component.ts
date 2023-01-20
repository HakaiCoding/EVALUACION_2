import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  template: `<img src="../../assets/foto.jpg" alt="plazamayor">`,
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
