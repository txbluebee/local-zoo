import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'ageGroup',
  pure: false
})


export class AgeGroupPipe implements PipeTransform {
  transform(input: Animal[], filterByAgeGroup){
    var output: Animal[] = [];
    if (filterByAgeGroup === "allAnimals") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
      return output;
    } else if (filterByAgeGroup === "old") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (filterByAgeGroup === "young") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
