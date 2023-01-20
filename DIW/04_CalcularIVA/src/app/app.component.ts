import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjercicioIva';

  mensaje = "";

  calcular(iva: String){
    if(Number(iva) > 20){
      this.mensaje = "Este artículo es de lujo";
    }
    else{
      this.mensaje = "Este artículo no es de lujo";
    }
  }
}
