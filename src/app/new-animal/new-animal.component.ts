import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.scss']
})
export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter;

  submitNewAnimal (
    species: string,
    name: string,
    age: number,
    diet: string,
    location: string,
    caretakers: number,
    sex: string,
    likes: string,
    dislikes: string
  ){
    var newAnimal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }

}
