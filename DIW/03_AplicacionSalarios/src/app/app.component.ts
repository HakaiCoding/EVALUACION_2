import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBinding';

  salary = 1500;

  subirSueldo5() {
    return this.salary = Number((this.salary * 1.05).toFixed(2))
  }

  subirSueldo(increment: String) {
    return this.salary = this.salary + Number(increment);
  }

  bajarSueldo(deduction: String) {
    return this.salary = this.salary - Number(deduction);
  }

  setColor(salary : Number){
    if(this.salary <= 1500){
      return "red";
    }
    else if(this.salary > 1500 && this.salary < 3000){
      return "blue";
    }
    else{
      return "green";
    }
  }
}
