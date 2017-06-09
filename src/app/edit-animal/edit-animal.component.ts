import { Component, Input } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent {
  @Input() selectedAnimal;
}
