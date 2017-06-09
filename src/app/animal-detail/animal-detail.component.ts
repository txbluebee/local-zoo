import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent {
  @Input() animalList: Animal[];
  @Output() editAnimalSender = new EventEmitter;

  editAnimal(animal){
    this.editAnimalSender.emit(animal);
  }

  // Select Different Age Group
  filterByAgeGroup: string = "allAnimals";
  
  onChangeAge(ageOption) {
    this.filterByAgeGroup = ageOption;
  }
}
