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

  // filter animal by Age
  filterByAgeGroup: string = "allAnimals";

  onChangeAge(ageOption) {
    this.filterByAgeGroup = ageOption;
  }

  // filter animal by Different
  filterByDiet: string = "allAnimals"

  onChangeDiet(dietOption) {
    this.filterByDiet = dietOption;
  }
}
