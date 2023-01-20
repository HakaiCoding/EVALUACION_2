import { Component } from '@angular/core';
import { Book } from '../app/models/libro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directivas';

  checkAll = false;
  checkRead = false;
  control = false;

  book1 = new Book(1, "ESDLA", "JR Tolkein", "Pub1", true);
  book2 = new Book(2, "Bleach", "Tite Kubo", "Shonen", true);
  book3 = new Book(3, "Memorias de Idhun", "Laura Gallego", "Pub3", false);

  books: Array<Book>=new Array(this.book1, this.book2, this.book3);

  showAll(){
    return this.checkAll = true, this.control = true;
  }

  showRead(){
    return this.checkRead = true, this.control = true;
  }

  hideThings(){
    return this.checkAll = false, this.checkRead = false, this.control = false;
  }
}
