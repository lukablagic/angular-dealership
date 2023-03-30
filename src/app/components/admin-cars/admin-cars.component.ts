import { Component, Input } from '@angular/core';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-admin-cars',
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.scss']
})
export class AdminCarsComponent {
  car:Car;

  getFilters(car:Car){
this.car = car;
  }
}
