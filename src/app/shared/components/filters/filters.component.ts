import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Car } from '../../models/car.model';
import { Equipment } from '../../models/equipment.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() carEventEmmiter = new EventEmitter<Car>();

  carForm: FormGroup = new FormGroup({
    model: new FormControl(''),
    // carPrice: new FormControl('')
  });
  models: any[];
  priceRange: any[]= [
    { label: '5000', value: 5000 },
    { label: '10000', value: 10000 },
    { label: '15000', value: 15000 },
    { label: '20000', value: 20000 },
    { label: '25000', value: 25000 },
    { label: '30000', value: 30000 },
];
  selectedPriceRange: number;
  mileageRange = [
    { label: '50000', value: 50000 },
    { label: '100000', value: 100000 },
    { label: '150000', value: 150000 },
    { label: '200000', value: 200000 },
];
  selectedMileageRange: number;
  yearRange: any[] = [
    { label: '2010', value: 2010 },
    { label: '2011', value: 2011 },
    { label: '2012', value: 2012 },
    { label: '2013', value: 2013 },
    { label: '2014', value: 2014 },
    { label: '2015', value: 2015 },
    { label: '2016', value: 2016 },
    { label: '2017', value: 2017 },
    { label: '2018', value: 2018 },
    { label: '2019', value: 2019 },
    { label: '2020', value: 2020 },
];
  selectedYearRange: number; 
transmissionRange: any[] = [
    { label: 'RWD', value: 'RWD' },
    { label: 'FWD', value: 'FWD' },
    { label: '4x4', value: '4x4' },
];
  selectedTransmissionRange: string;
  fuelRange: any[] = [
    { label: 'Petrol', value: 'Petrol' },
    { label: 'Diesel', value: 'Diesel' },
    { label: 'Hybrid', value: 'Hybrid' },
    { label: 'Electric', value: 'Electric' },
];
selectedFuelRange: string;
  val2: number = 50;
  engines: String[];
  selectedModel: Car;
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
    this.car.price = this.selectedPriceRange;
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
