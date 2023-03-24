import { Component } from '@angular/core';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-search-buy',
  templateUrl: './search-buy.component.html',
  styleUrls: ['./search-buy.component.scss'],
})
export class SearchBuyComponent {
  car:Car;
  
  
  getFilters(car: Car) {
    this.car = car;
  }
}
