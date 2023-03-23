import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Car } from '../../models/car.model';
import { Equipment } from '../../models/equipment.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Output() carEventEmmiter = new EventEmitter<Car>();

  carForm: FormGroup = new FormGroup({
    model: new FormControl(''),
    // carPrice: new FormControl('')
  });
  carMake: string[] = ['Mercedes', 'BMW', 'Audi', 'Volkswagen', 'Ford'];
  selectedMake: string;
  models: any[];
  priceRange: number[] = [5000, 10000, 15000, 20000, 25000, 30000];
  selectedPriceRange: number;
  mileageRange = [50000, 100000, 150000, 200000];
  selectedMileageRange: number;
  yearRange: number[] = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  ];
  selectedYearRange: number;
  transmissionRange: string[] = ['RWD', 'FWD', '4x4'];
  selectedTransmissionRange: string;
  fuelRange: string[] = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
  selectedFuelRange: string;
  selectedModelRange: string;
  car: Car = new Car();
  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  constructor() {}

  sendCarData(car: Car) {
    this.car.make = this.selectedMake;
    this.car.model = this.selectedModelRange;
    this.car.price = this.selectedPriceRange;
    this.car.year = this.selectedYearRange;
    this.car.mileage = this.selectedMileageRange;
    this.car.fuel = this.selectedFuelRange;
    this.car.transmission = this.selectedTransmissionRange;
      this.carEventEmmiter.emit(car);
  }

  loadModels(make: string) {
    switch (make) {
      case 'Mercedes':
        this.models = [
          'A-Class',
          'B-Class',
          'C-Class',
          'E-Class',
          'S-Class',
          'GLA-Class',
          'GLC-Class',
          'GLE-Class',
          'G-Class',
        ];
        break;
      case 'BMW':
        this.models = [
          '1-Series',
          '2-Series',
          '3-Series',
          '4-Series',
          '5-Series',
          '6-Series',
          '7-Series',
          'X1',
          'X2',
          'X3',
          'X4',
          'X5',
          'X6',
          'X7',
          'Z4',
        ];
        break;
      case 'Audi':
        this.models = [
          'A1',
          'A2',
          'A3',
          'A4',
          'A5',
          'A6',
          'A7',
          'A8',
          'Q2',
          'Q3',
          'Q5',
          'Q7',
          'Q8',
          'R8',
        ];
        break;
      case 'Volkswagen':
        this.models = [
          'Arteon',
          'Beetle',
          'Bora',
          'Caddy',
          'CC',
          'Corrado',
          'Eos',
          'Golf',
        ];
        break;
      case 'Ford':
        this.models = [
          'B-Max',
          'C-Max',
          'EcoSport',
          'Edge',
          'Escape',
          'Fiesta',
          'Focus',
          'Galaxy',
          'Grand C-Max',
          'Kuga',
        ];
        break;
    }
  }
}
