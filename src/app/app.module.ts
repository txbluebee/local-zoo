import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { AgeGroupPipe } from './age-group.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnimalDetailComponent,
    NewAnimalComponent,
    EditAnimalComponent,
    AgeGroupPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
