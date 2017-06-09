import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalDetailComponent,
    NewAnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
