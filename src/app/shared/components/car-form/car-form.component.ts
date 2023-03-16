import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Car } from '../../models/car.model';
import { Equipment } from '../../models/equipment.model';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent {
  @Output() carEventEmmiter = new EventEmitter<Car>();

  carForm: FormGroup = new FormGroup({
    model: new FormControl(''),
    // carPrice: new FormControl('')
  });
  models: any[];
  val2: number = 50;
  engines: String[];
  selectedModel: Car;
  carPrice: number;
  carYear: number;
  carMileage: number;
  carFuel: string;
  carTransmission: string;
  selectedMileage: number = 0;
  engineSize: number;
  engineSizeOptions: number[];
  selectedEngine: number;
  equipment: Equipment;
  engineType: string;
  car: Car;
  display: boolean = false;
  airConditioning: boolean;
  cruiseControl: boolean;
  parkingSensors: boolean;
  powerSteering: boolean;
  powerWindows: boolean;
  powerMirrors: boolean;
  ABS: boolean;
  airbags: boolean;


  showDialog() {
      this.display = true;
  }


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

    this.selectedModel = new Car();
    this.car = new Car();
  }

  sendCarData(car: Car) {
    this.car.model = this.selectedModel.model;
    this.car.price = this.carPrice;
    this.car.year = this.carYear;
    this.car.mileage = this.carMileage;
    this.carMileage = this.selectedMileage;
    this.car.fuel = this.carFuel;
    this.car.transmission = this.carTransmission;
    this.car.engineSize = this.selectedEngine;
    this.equipment = new Equipment(this.airConditioning, this.cruiseControl, this.parkingSensors, this.powerSteering, this.powerWindows, this.powerMirrors, this.ABS, this.airbags);
    this.car.equipment = this.equipment;
    
    this.carEventEmmiter.emit(car);
  }
}
