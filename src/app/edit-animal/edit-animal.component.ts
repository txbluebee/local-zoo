import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent {
  @Input() selectedAnimal;
  @Output() finishedEditingSender = new EventEmitter;

  finishedEditing() {
    this.finishedEditingSender.emit()
  }

}
