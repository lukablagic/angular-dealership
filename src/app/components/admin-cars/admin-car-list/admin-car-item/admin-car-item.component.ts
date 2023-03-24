import { Component, Input } from '@angular/core';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-admin-car-item',
  templateUrl: './admin-car-item.component.html',
  styleUrls: ['./admin-car-item.component.scss'],
})
export class AdminCarItemComponent {
  @Input() car: Car;
  carDetails: Car;
  visible: boolean;
  constructor(private api: CarsAPIService) {}
  ngOnInit() {}
  
  removeCar() {
    this.api.removeCar(this.car);
  }
  

  showDialog() {
    this.visible = true;
  }
}
