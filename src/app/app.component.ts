import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  animalList: Animal[] = [{
      species: "Arctic Fox",
      name: "Moon",
      age: 2,
      diet: "carnivore",
      location: "Northern Trail",
      caretakers: 5,
      sex: "Female",
      likes: "Cool shade",
      dislikes: "Loud noises"
    },{
      species: "Ocelot",
      name: "Prince",
      age: 4,
      diet: "carnivore",
      location: "Tropical Rain Forest Building",
      caretakers: 6,
      sex: "Male",
      likes: "Laying in the sunshine",
      dislikes: "Toys that are not rope-based"
    },{
      species: "Northwest Black Tailed Deer",
      name: "Tinkerbell",
      age: 8,
      diet: "herbivore",
      location: "Northern Trail",
      caretakers: 2,
      sex: "Female",
      likes: "Delicate roots and leaves",
      dislikes: "Loud Noises"
    }
  ];

  selectedAnimal = null;

  editAnimal(animal){
    this.selectedAnimal = animal;
  }

  addAnimal(newAnimal){
    this.animalList.push(newAnimal);
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}
