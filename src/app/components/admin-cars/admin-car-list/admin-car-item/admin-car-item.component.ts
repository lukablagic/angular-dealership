import { Component, Input, ViewChild } from '@angular/core';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { DetailedCarComponent } from 'src/app/shared/components/detailed-car/detailed-car.component';
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
  imageLeft: any;
  imageCenter: any;
  imageRight: any;

  constructor(private api: CarsAPIService) {}

  ngOnInit() {}
  
  removeCar() {
    this.api.removeCar(this.car);
  }
  
  getDetailPictures() {
    this.api.getCarImageAngel(this.car,"05").subscribe((data) => {
      this.imageLeft = data;
    });
    this.api.getCarImageAngel(this.car,"09").subscribe((data) => {
      this.imageCenter = data;
    });
    this.api.getCarImageAngel(this.car,"13").subscribe((data) => {
      this.imageRight = data;
    });

  }
  showDialog() {
    this.visible = true;
  }
}
