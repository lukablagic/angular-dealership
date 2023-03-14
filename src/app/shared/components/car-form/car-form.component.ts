import { Component, EventEmitter, Output } from '@angular/core';
import { Form } from '@angular/forms';
import { Car } from '../../models/car.model';
import { Equipment } from '../../models/equipment.model';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent {
  @Output() carEventEmmiter = new EventEmitter<Car>();
  models: Car[];
  selectedModel: string;
  carPrice: number;
  carYear: number;
  carMileage: number;
  carFuel: string;
  carTransmission: string;
  engineSize: number;
  engineSizeOptions: number[];
  selectedEngine: number;
  equipment: Equipment;
  car: Car;

  constructor() {
    this.models = [
      { model: 'S Class' },
      { model: 'A Class' },
      { model: 'E Class' },
      { model: 'C Class' },
      { model: 'B Class' },
      { model: 'V Class' },
      { model: 'GLA Class' },
      { model: 'GLC Class' },
      { model: 'GLE Class' },
      { model: 'GLS Class' },
      { model: 'G Class' },
    ];
  }

sendCarData(car: Car) {
  this.carEventEmmiter.emit(car);
}

}
