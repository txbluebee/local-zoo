import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'diet',
  pure: false
})


export class DietPipe implements PipeTransform {

  transform(input: Animal[], filterByDiet){
    var output: Animal[] = [];
    if (filterByDiet === "allAnimals") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
      return output;
    } else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === filterByDiet) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
