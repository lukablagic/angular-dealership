import { Component, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { CarFormComponent } from 'src/app/shared/components/car-form/car-form.component';
import { Car } from 'src/app/shared/models/car.model';
import { Equipment } from 'src/app/shared/models/equipment.model';

@Component({
  // standalone: true,
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.scss'],
  // imports: [CarFormComponent],
})
export class AddcarsComponent {
  car: Car = new Car();
  display: boolean = false;
  equipment: Equipment;
constructor() {
  this.equipment = new Equipment(false, false, false, false, false, false, false, false);
}
  showDialog() {
    this.display = true;
  }

  setCar(car: Car) {
    this.car = car;
    this.equipment = car.equipment;
  }
}
