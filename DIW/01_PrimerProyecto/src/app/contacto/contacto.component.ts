import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  nombre : String = "Victor";
  correo : String = "victor@correo.com";


  constructor() { }

  ngOnInit(): void {
  }

}
