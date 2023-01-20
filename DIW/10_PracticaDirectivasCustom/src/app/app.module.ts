import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lakers,Bulls,Celtics } from './teams-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    Lakers,
    Bulls,
    Celtics
  ],
  
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
